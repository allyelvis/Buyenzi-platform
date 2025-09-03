
import React, { useState } from 'react';
import Card from './Card';
import { WalletAccount } from '../types';
import { MOCK_WALLET_ACCOUNT } from '../constants';

interface CreateWalletModalProps {
  onClose: () => void;
  onWalletCreated: (wallet: WalletAccount) => void;
}

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CreateWalletModal: React.FC<CreateWalletModalProps> = ({ onClose, onWalletCreated }) => {
    const [step, setStep] = useState(1);
    const [isPhraseSaved, setIsPhraseSaved] = useState(false);
    const recoveryPhrase = MOCK_WALLET_ACCOUNT.recoveryPhrase.split(' ');
    
    // For this simulation, we'll ask for specific words to confirm.
    const confirmationWords = [
        { index: 2, word: recoveryPhrase[2] }, // puzzle
        { index: 5, word: recoveryPhrase[5] }, // liberty
        { index: 9, word: recoveryPhrase[9] }, // decline
    ];
    const [userInput, setUserInput] = useState({ 2: '', 5: '', 9: '' });
    const [error, setError] = useState('');

    const handleConfirm = () => {
        const isCorrect = confirmationWords.every(item => userInput[item.index as keyof typeof userInput].trim().toLowerCase() === item.word);
        if (isCorrect) {
            setError('');
            alert('Wallet created successfully!');
            onWalletCreated(MOCK_WALLET_ACCOUNT);
        } else {
            setError('One or more words are incorrect. Please try again.');
        }
    };

    const handleInputChange = (index: number, value: string) => {
        setUserInput(prev => ({ ...prev, [index]: value }));
    };

    const renderStep = () => {
        switch(step) {
            case 1: // Show recovery phrase
                return (
                    <>
                        <h3 className="text-xl font-bold text-white mb-2 text-center">Your Recovery Phrase</h3>
                        <p className="text-sm text-center text-gray-400 mb-4">Write these words down in order and keep them somewhere safe. This is the only way to recover your wallet.</p>
                        <div className="grid grid-cols-3 gap-3 bg-gray-900 p-4 rounded-lg border border-gray-700">
                            {recoveryPhrase.map((word, index) => (
                                <div key={index} className="text-gray-300">
                                    <span className="text-gray-500 mr-2">{index + 1}.</span>{word}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-6">
                            <input
                                id="is-saved-checkbox"
                                type="checkbox"
                                checked={isPhraseSaved}
                                onChange={() => setIsPhraseSaved(!isPhraseSaved)}
                                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-brand-primary focus:ring-brand-primary"
                            />
                            <label htmlFor="is-saved-checkbox" className="ml-2 block text-sm text-gray-300">I have securely saved my recovery phrase.</label>
                        </div>
                    </>
                );
            case 2: // Confirm phrase
                return (
                    <>
                         <h3 className="text-xl font-bold text-white mb-2 text-center">Confirm Your Phrase</h3>
                         <p className="text-sm text-center text-gray-400 mb-6">To ensure you saved it correctly, please enter the following words from your phrase.</p>
                         <div className="space-y-4">
                            {confirmationWords.map(({ index }) => (
                                <div key={index}>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Word #{index + 1}</label>
                                    <input 
                                        type="text"
                                        value={userInput[index as keyof typeof userInput]}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                </div>
                            ))}
                         </div>
                         {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
                    </>
                );
            default: return null;
        }
    };

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 animate-[fade-in_0.2s_ease-out]" onClick={onClose}>
            <div className="relative w-full max-w-lg mx-4 animate-[slide-up_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                <Card>
                    <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white" aria-label="Close modal"><XIcon /></button>
                    {renderStep()}
                    <div className="flex justify-between items-center mt-6">
                        {step === 2 && (
                             <button onClick={() => setStep(1)} className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition-colors font-semibold">
                                Back
                            </button>
                        )}
                        <div className="flex-grow"></div> {/* Spacer */}
                        {step === 1 ? (
                             <button onClick={() => setStep(2)} disabled={!isPhraseSaved} className="w-full font-semibold px-4 py-2 rounded-lg bg-brand-primary text-gray-900 hover:bg-brand-secondary transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed">
                                Continue
                            </button>
                        ) : (
                            <button onClick={handleConfirm} className="px-4 py-2 rounded-lg bg-brand-primary text-gray-900 hover:bg-brand-secondary transition-colors font-semibold">
                                Create Wallet
                            </button>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CreateWalletModal;
