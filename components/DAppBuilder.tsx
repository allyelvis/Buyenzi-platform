import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Card from './Card';
import { SparklesIcon, ClipboardIcon } from '../constants';

const CodeIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const DeployIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
);


const DAppBuilder: React.FC = () => {
    const [contractType, setContractType] = useState('erc20');
    const [params, setParams] = useState({ name: '', symbol: '', supply: '1000000' });
    const [customPrompt, setCustomPrompt] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isDeploying, setIsDeploying] = useState(false);
    const [deployedAddress, setDeployedAddress] = useState('');
    const [interactionResult, setInteractionResult] = useState('');
    const [error, setError] = useState('');

    const handleGenerateCode = async () => {
        setIsGenerating(true);
        setError('');
        setGeneratedCode('');
        setDeployedAddress('');
        setInteractionResult('');

        let prompt = '';
        if (contractType === 'custom') {
            if (!customPrompt) {
                setError('Please enter a description for your custom contract.');
                setIsGenerating(false);
                return;
            }
            prompt = customPrompt;
        } else {
             if (!params.name || !params.symbol) {
                setError('Please provide a Name and Symbol for your contract.');
                setIsGenerating(false);
                return;
            }
            if (contractType === 'erc20') {
                prompt = `Generate a complete, secure, and production-ready Solidity smart contract for an ERC20 token. The contract name should be '${params.name}', the token name should be '${params.name}', the symbol should be '${params.symbol}', and the initial supply should be ${params.supply || 0} tokens (with 18 decimals). The contract owner should be the deployer and have the initial supply.`;
            } else if (contractType === 'erc721') {
                prompt = `Generate a complete, secure, and production-ready Solidity smart contract for an ERC721 NFT collection. The contract name should be '${params.name}', the collection name should be '${params.name}', and the symbol should be '${params.symbol}'. It should include a 'safeMint(address to, uint256 tokenId)' function that can only be called by the contract owner.`;
            }
        }

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    systemInstruction: "You are an expert Solidity smart contract developer. Your task is to generate clean, secure, and gas-efficient Solidity code based on user specifications. You must use OpenZeppelin contracts for standard implementations like ERC20 and ERC721 to ensure security and best practices. The generated code should be complete, compilable, and well-commented. Only output the raw Solidity code inside a single markdown code block.",
                }
            });
            
            const code = response.text.replace(/```solidity|```/g, '').trim();
            setGeneratedCode(code);
        } catch (err: any) {
            console.error("Gemini API error:", err);
            setError(`Failed to generate contract. ${err.message || 'Please try again.'}`);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleDeploy = async () => {
        setIsDeploying(true);
        setInteractionResult('');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate deployment delay
        setDeployedAddress(`0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`);
        setIsDeploying(false);
    };

    const handleInteraction = (action: string) => {
        let result = '';
        switch(action) {
            case 'balanceOf':
                result = `Query Result: Balance is ${(Math.random() * 10000).toFixed(4)} ${params.symbol}.`;
                break;
            case 'transfer':
                result = `Transaction Sent: Transfer of 100 ${params.symbol} successful (simulation).`;
                break;
            case 'ownerOf':
                result = `Query Result: Token ID 1 is owned by 0x...dEaD.`;
                break;
            case 'mint':
                result = `Transaction Sent: Minting of Token ID 2 to your address successful (simulation).`;
                break;
        }
        setInteractionResult(result);
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(generatedCode);
        alert('Code copied to clipboard!');
    };

    const renderParams = () => (
        <>
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Name" value={params.name} onChange={e => setParams({...params, name: e.target.value})} placeholder={contractType === 'erc20' ? "MyToken" : "MyNFTs"}/>
                <InputField label="Symbol" value={params.symbol} onChange={e => setParams({...params, symbol: e.target.value})} placeholder={contractType === 'erc20' ? "MTK" : "MNFT"} />
            </div>
            {contractType === 'erc20' && (
                <InputField label="Initial Supply" type="number" value={params.supply} onChange={e => setParams({...params, supply: e.target.value})} placeholder="1000000" />
            )}
        </>
    );
    
    const InputField = ({ label, value, onChange, placeholder, type = 'text' }: any) => (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
        </div>
    );

    const renderInteractionUI = () => {
        if (!deployedAddress) return null;
        
        if (contractType === 'erc20') {
            return (
                <div className="space-y-4">
                    <InteractionCard title="balanceOf(address account)">
                        <input type="text" placeholder="0x..." className="w-full bg-gray-900 rounded p-2 text-sm" />
                        <button onClick={() => handleInteraction('balanceOf')} className="bg-gray-600 w-full rounded p-2 mt-2 text-sm font-semibold hover:bg-gray-500">Query</button>
                    </InteractionCard>
                    <InteractionCard title="transfer(address to, uint256 amount)">
                        <input type="text" placeholder="Recipient Address" className="w-full bg-gray-900 rounded p-2 text-sm mb-2" />
                        <input type="number" placeholder="Amount" className="w-full bg-gray-900 rounded p-2 text-sm" />
                        <button onClick={() => handleInteraction('transfer')} className="bg-brand-secondary text-gray-900 w-full rounded p-2 mt-2 text-sm font-semibold hover:bg-brand-primary">Write</button>
                    </InteractionCard>
                </div>
            );
        }
        if (contractType === 'erc721') {
            return (
                 <div className="space-y-4">
                    <InteractionCard title="ownerOf(uint256 tokenId)">
                        <input type="number" placeholder="Token ID" className="w-full bg-gray-900 rounded p-2 text-sm" />
                        <button onClick={() => handleInteraction('ownerOf')} className="bg-gray-600 w-full rounded p-2 mt-2 text-sm font-semibold hover:bg-gray-500">Query</button>
                    </InteractionCard>
                    <InteractionCard title="safeMint(address to, uint256 tokenId)">
                        <input type="text" placeholder="Recipient Address" className="w-full bg-gray-900 rounded p-2 text-sm mb-2" />
                        <input type="number" placeholder="Token ID" className="w-full bg-gray-900 rounded p-2 text-sm" />
                        <button onClick={() => handleInteraction('mint')} className="bg-brand-secondary text-gray-900 w-full rounded p-2 mt-2 text-sm font-semibold hover:bg-brand-primary">Write</button>
                    </InteractionCard>
                </div>
            );
        }
        return <p className="text-sm text-center text-gray-400">Interaction for custom contracts is not supported in this demo.</p>;
    };

    const InteractionCard: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
        <div className="bg-gray-700 p-3 rounded-lg">
            <p className="font-mono text-xs font-semibold text-brand-primary mb-2">{title}</p>
            {children}
        </div>
    );
    
    return (
        <div className="p-4 md:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">AI dApp Builder</h1>
                <p className="text-gray-400">Generate, deploy, and interact with smart contracts using AI.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <Card title="1. Configuration" className="lg:col-span-1 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Contract Type</label>
                        <select value={contractType} onChange={e => setContractType(e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary">
                            <option value="erc20">ERC20 Token</option>
                            <option value="erc721">ERC721 NFT Collection</option>
                            <option value="custom">Custom Contract</option>
                        </select>
                    </div>

                    {contractType === 'custom' ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Describe your contract</label>
                            <textarea value={customPrompt} onChange={e => setCustomPrompt(e.target.value)} rows={4} placeholder="e.g., A simple voting contract with proposals..." className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                    ) : renderParams()}
                    
                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button onClick={handleGenerateCode} disabled={isGenerating} className="w-full flex items-center justify-center gap-2 font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-2.5 rounded-lg transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed">
                        <SparklesIcon />
                        {isGenerating ? 'Generating...' : 'Generate Contract'}
                    </button>
                </Card>

                <div className="lg:col-span-2 space-y-8">
                    <Card title="2. Generated Code">
                        <div className="relative">
                            <pre className="bg-gray-900 text-sm rounded-lg p-4 max-h-[400px] overflow-auto language-solidity">
                                {isGenerating ? (
                                    <div className="flex items-center justify-center h-40">
                                        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
                                    </div>
                                ) : generatedCode ? (
                                    <code>{generatedCode}</code>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                                        <CodeIcon />
                                        <p>Your contract code will appear here.</p>
                                    </div>
                                )}
                            </pre>
                             {generatedCode && !isGenerating && (
                                <button onClick={handleCopyCode} className="absolute top-3 right-3 p-2 bg-gray-600/50 rounded-lg hover:bg-gray-500/50 transition-colors">
                                    <ClipboardIcon className="w-5 h-5 text-gray-300" />
                                </button>
                            )}
                        </div>
                    </Card>

                    <Card title="3. Deployment & Interaction">
                        {!generatedCode ? (
                            <p className="text-center text-gray-500 py-4">Generate code to deploy a contract.</p>
                        ) : (
                            <div className="space-y-4">
                                {!deployedAddress ? (
                                    <button onClick={handleDeploy} disabled={isDeploying} className="w-full flex items-center justify-center gap-2 font-semibold text-gray-900 bg-brand-secondary hover:bg-brand-primary py-2.5 rounded-lg transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed">
                                        <DeployIcon />
                                        {isDeploying ? 'Deploying...' : 'Deploy Contract'}
                                    </button>
                                ) : (
                                    <div>
                                        <p className="text-sm text-green-400">Deployment Successful!</p>
                                        <p className="text-xs text-gray-400">Contract Address:</p>
                                        <p className="font-mono text-xs bg-gray-900 p-2 rounded break-all">{deployedAddress}</p>
                                    </div>
                                )}
                                
                                {deployedAddress && <hr className="border-gray-700" />}

                                {renderInteractionUI()}
                                
                                {interactionResult && (
                                    <div className="mt-4">
                                        <p className="text-xs text-gray-400">Last Action Result:</p>
                                        <p className="text-sm font-mono bg-gray-900 p-2 rounded">{interactionResult}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DAppBuilder;