import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Card from './Card';
import { SparklesIcon } from '../constants';
import { GeneratedNFT } from '../types';

const ImagePlaceholderIcon = ({ className = 'w-16 h-16' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);


const NFTStudio: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [style, setStyle] = useState('Photorealistic');
    const [aspectRatio, setAspectRatio] = useState<'1:1' | '16:9' | '9:16'>('1:1');
    
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [error, setError] = useState('');
    
    const [nftName, setNftName] = useState('');
    const [nftDescription, setNftDescription] = useState('');
    const [isMinting, setIsMinting] = useState(false);

    const [myCreations, setMyCreations] = useState<GeneratedNFT[]>([]);

    const handleGenerateImage = async () => {
        if (!prompt) {
            setError('Please enter a prompt to generate an image.');
            return;
        }
        setIsLoadingImage(true);
        setGeneratedImageUrl(null);
        setError('');
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const fullPrompt = `${prompt}, ${style} style`;
            
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: fullPrompt,
                config: {
                  numberOfImages: 1,
                  outputMimeType: 'image/jpeg',
                  aspectRatio: aspectRatio,
                },
            });

            if (response.generatedImages && response.generatedImages.length > 0) {
                 const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
                 const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
                 setGeneratedImageUrl(imageUrl);
            } else {
                throw new Error("No image was generated. The prompt may have been blocked.");
            }

        } catch (err: any) {
            console.error("Gemini API error:", err);
            setError(`Image generation failed. ${err.message || 'Please try again later.'}`);
        } finally {
            setIsLoadingImage(false);
        }
    };

    const handleMint = async () => {
        if (!nftName || !generatedImageUrl) {
            alert("Please provide a name for your NFT.");
            return;
        }
        setIsMinting(true);

        // Simulate a blockchain transaction
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const newNft: GeneratedNFT = {
            id: `nft_${Date.now()}`,
            name: nftName,
            description: nftDescription,
            imageUrl: generatedImageUrl,
            txHash: `0x${[...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`
        };

        setMyCreations(prev => [newNft, ...prev]);
        
        // Reset state for next creation
        setGeneratedImageUrl(null);
        setPrompt('');
        setNftName('');
        setNftDescription('');
        setIsMinting(false);
        
        alert(`NFT "${newNft.name}" minted successfully!`);
    };

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">NFT Generation Studio</h1>
                <p className="text-gray-400">Create and mint unique digital assets using AI.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card title="1. Generate Your Art">
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleGenerateImage(); }}>
                        <div>
                            <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-1">Prompt</label>
                            <textarea
                                id="prompt"
                                rows={3}
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., A futuristic cyberpunk city skyline at dusk"
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="style" className="block text-sm font-medium text-gray-300 mb-1">Style</label>
                                <select id="style" value={style} onChange={e => setStyle(e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary">
                                    <option>Photorealistic</option>
                                    <option>Cartoon</option>
                                    <option>Watercolor</option>
                                    <option>Abstract</option>
                                    <option>Pixel Art</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="aspectRatio" className="block text-sm font-medium text-gray-300 mb-1">Aspect Ratio</label>
                                <select id="aspectRatio" value={aspectRatio} onChange={e => setAspectRatio(e.target.value as any)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary">
                                    <option value="1:1">Square (1:1)</option>
                                    <option value="16:9">Landscape (16:9)</option>
                                    <option value="9:16">Portrait (9:16)</option>
                                </select>
                            </div>
                        </div>
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoadingImage}
                            className="w-full flex items-center justify-center gap-2 font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-2.5 rounded-lg transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
                        >
                            <SparklesIcon className="w-5 h-5" />
                            {isLoadingImage ? "Generating..." : "Generate Image"}
                        </button>
                    </form>
                </Card>

                <div className="space-y-8">
                     <Card title="2. Your Creation">
                        <div className={`aspect-square w-full bg-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 ${generatedImageUrl ? 'p-0' : 'p-4'}`}>
                            {isLoadingImage ? (
                                <div className="text-center text-gray-400 space-y-2">
                                    <div className="w-8 h-8 mx-auto border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
                                    <p>Generating art...</p>
                                </div>
                            ) : generatedImageUrl ? (
                                <img src={generatedImageUrl} alt="Generated NFT art" className="w-full h-full object-contain rounded-lg"/>
                            ) : (
                                <div className="text-center text-gray-500 space-y-2">
                                    <ImagePlaceholderIcon className="mx-auto w-16 h-16"/>
                                    <p>Your generated image will appear here.</p>
                                </div>
                            )}
                        </div>
                        {generatedImageUrl && !isLoadingImage && (
                            <div className="mt-6 space-y-4">
                                <h3 className="text-lg font-bold text-white">3. Mint your NFT</h3>
                                 <div>
                                    <label htmlFor="nftName" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                    <input type="text" id="nftName" value={nftName} onChange={e => setNftName(e.target.value)} placeholder="My Awesome NFT" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                                </div>
                                <div>
                                    <label htmlFor="nftDescription" className="block text-sm font-medium text-gray-300 mb-1">Description (Optional)</label>
                                    <textarea id="nftDescription" rows={2} value={nftDescription} onChange={e => setNftDescription(e.target.value)} placeholder="A short story about your creation..." className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                                </div>
                                 <button
                                    onClick={handleMint}
                                    disabled={isMinting}
                                    className="w-full font-semibold text-gray-900 bg-brand-secondary hover:bg-brand-primary py-2.5 rounded-lg transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
                                >
                                    {isMinting ? "Minting..." : "Mint NFT"}
                                </button>
                            </div>
                        )}
                    </Card>
                    <Card title="My Creations">
                        {myCreations.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2">
                                {myCreations.map(nft => (
                                    <div key={nft.id} className="group relative overflow-hidden rounded-lg">
                                        <img src={nft.imageUrl} alt={nft.name} className="w-full h-full object-cover aspect-square"/>
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-xs text-white flex flex-col justify-end">
                                            <p className="font-bold truncate">{nft.name}</p>
                                            <p className="text-gray-300 truncate">Tx: {nft.txHash.substring(0, 10)}...</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 py-8">You haven't minted any NFTs yet.</p>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NFTStudio;
