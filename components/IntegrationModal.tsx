
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Integration } from '../types';

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CheckCircleIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IntegrationModal: React.FC<{
  integration: Integration;
  onClose: () => void;
  onConnect: (integrationId: string) => void;
}> = ({ integration, onClose, onConnect }) => {
    const [status, setStatus] = useState<'connecting' | 'success'>('connecting');

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStatus('success');
        }, 2000);
        const timer2 = setTimeout(() => {
            onConnect(integration.id);
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [integration.id, onConnect]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 animate-[fade-in_0.2s_ease-out]"
            onClick={onClose}
        >
            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
            <div
                className="relative w-full max-w-md mx-4 animate-[slide-up_0.3s_ease-out]"
                onClick={(e) => e.stopPropagation()}
            >
                <Card className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <XIcon />
                    </button>
                    <div className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
                        <img src={integration.logoUrl} alt={`${integration.name} logo`} className="w-20 h-20 bg-white/10 p-2 rounded-full object-contain mb-4" />
                        
                        {status === 'connecting' && (
                            <>
                                <h3 className="text-xl font-bold text-white">Connecting to {integration.name}...</h3>
                                <p className="text-gray-400 mt-2">Please wait while we establish a secure connection. You may be redirected for authorization.</p>
                                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-brand-primary mt-8"></div>
                            </>
                        )}
                        
                        {status === 'success' && (
                           <div className="animate-[fade-in_0.5s_ease-out]">
                                <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto" />
                                <h3 className="text-xl font-bold text-white mt-4">Connection Successful!</h3>
                                <p className="text-gray-400 mt-2">You have successfully connected your account to {integration.name}.</p>
                           </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default IntegrationModal;
