
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { MOCK_TV_CHANNELS, MOCK_TV_PROGRAMS, MOCK_SUBSCRIPTION_PLANS } from '../constants';
import { TvChannel, TvProgram, SubscriptionPlan } from '../types';
import { EthIcon } from '../constants';

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const LockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const PlanCard: React.FC<{ plan: SubscriptionPlan, onSelect: (planId: string, currency: 'USD' | 'ETH') => void }> = ({ plan, onSelect }) => {
    return (
        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600 flex flex-col">
            <h3 className="text-xl font-bold text-brand-primary">{plan.name}</h3>
            <div className="my-4">
                <span className="text-4xl font-extrabold text-white">${plan.priceUsd}</span>
                <span className="text-gray-400">/month</span>
            </div>
            <p className="flex items-center gap-2 text-gray-300 font-semibold">
                <EthIcon className="w-5 h-5" /> or {plan.priceEth} ETH/month
            </p>
            <ul className="space-y-2 my-6 text-gray-300 flex-grow">
                {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="space-y-3 mt-auto">
                <button onClick={() => onSelect(plan.id, 'USD')} className="w-full font-semibold bg-gray-600 hover:bg-gray-500 py-2.5 rounded-lg transition-colors">Pay with Card</button>
                <button onClick={() => onSelect(plan.id, 'ETH')} className="w-full font-semibold bg-brand-primary text-gray-900 hover:bg-brand-secondary py-2.5 rounded-lg transition-colors">Pay with Crypto</button>
            </div>
        </div>
    );
};

const SubscriptionModal: React.FC<{ onClose: () => void; onSubscribe: () => void; }> = ({ onClose, onSubscribe }) => {
    const handleSelectPlan = (planId: string, currency: 'USD' | 'ETH') => {
        const plan = MOCK_SUBSCRIPTION_PLANS.find(p => p.id === planId);
        alert(`Thank you for subscribing to the ${plan?.name} plan with ${currency}! (This is a simulation)`);
        onSubscribe();
        onClose();
    };

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 animate-[fade-in_0.2s_ease-out]" onClick={onClose}>
            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
            <div className="w-full max-w-4xl mx-4 animate-[slide-up_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                <Card titleClassName="text-center" title="Choose Your Plan">
                    <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                        <XIcon />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {MOCK_SUBSCRIPTION_PLANS.map(plan => (
                            <PlanCard key={plan.id} plan={plan} onSelect={handleSelectPlan} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};


const TV: React.FC = () => {
    const [selectedChannel, setSelectedChannel] = useState<TvChannel>(MOCK_TV_CHANNELS[0]);
    const [currentProgram, setCurrentProgram] = useState<TvProgram | undefined>(
        MOCK_TV_PROGRAMS.find(p => p.channelId === MOCK_TV_CHANNELS[0].id)
    );
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!currentProgram) return;

        const updateProgress = () => {
            const now = new Date().getTime();
            const start = currentProgram.startTime.getTime();
            const end = currentProgram.endTime.getTime();
            const duration = end - start;
            const elapsed = now - start;
            const percentage = Math.min(100, (elapsed / duration) * 100);
            setProgress(percentage);
        };
        
        updateProgress();
        const interval = setInterval(updateProgress, 10000); // Update every 10 seconds
        return () => clearInterval(interval);

    }, [currentProgram]);

    const handleSelectChannel = (channel: TvChannel) => {
        const channelIndex = MOCK_TV_CHANNELS.findIndex(c => c.id === channel.id);
        if (!isSubscribed && channelIndex > 1) {
            setIsModalOpen(true);
            return;
        }

        setSelectedChannel(channel);
        const newProgram = MOCK_TV_PROGRAMS.find(p => p.channelId === channel.id) || MOCK_TV_PROGRAMS[0];
        setCurrentProgram(newProgram);
    };
    
    const getBackgroundImage = () => {
        const category = selectedChannel.category.toLowerCase();
        return `https://picsum.photos/seed/${category}tv/1280/720`;
    };

    return (
        <div className="p-4 md:p-8 space-y-8 h-full flex flex-col">
            <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-white">Live TV</h1>
                <p className="text-gray-400">Watch your favorite channels and movies live.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
                <div className="lg:col-span-2 flex flex-col space-y-8 min-h-0">
                    <Card className="flex-grow flex flex-col">
                        <div className="relative aspect-video w-full bg-black rounded-lg flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${getBackgroundImage()})`}}>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <span className="absolute top-4 left-4 bg-red-600 text-white font-bold text-sm px-3 py-1 rounded-md z-10">LIVE</span>
                            <div className="relative text-white z-10 text-center">
                                <h2 className="text-4xl font-bold">{selectedChannel.name}</h2>
                            </div>
                        </div>
                        {currentProgram && (
                             <div className="mt-6">
                                <h3 className="text-2xl font-bold text-white">{currentProgram.title}</h3>
                                <p className="text-gray-400 mt-1">{currentProgram.description}</p>
                                <div className="mt-4">
                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                        <span>{currentProgram.startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                        <span>{currentProgram.endTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-brand-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Card>
                </div>
                <Card title="Channel Guide" className="flex flex-col min-h-0">
                    {!isSubscribed && (
                        <button onClick={() => setIsModalOpen(true)} className="w-full mb-4 font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-2.5 rounded-lg transition-colors">
                            Subscribe to Unlock All
                        </button>
                    )}
                    <div className="flex-1 overflow-y-auto -mr-4 pr-3 space-y-2">
                        {MOCK_TV_CHANNELS.map((channel, index) => {
                            const isLocked = !isSubscribed && index > 1;
                            return (
                                <button
                                    key={channel.id}
                                    onClick={() => handleSelectChannel(channel)}
                                    disabled={selectedChannel.id === channel.id}
                                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 text-left
                                        ${selectedChannel.id === channel.id ? 'bg-brand-primary/20' : 'hover:bg-gray-700/50'}
                                        ${isLocked ? 'opacity-50' : ''}
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={channel.logoUrl} alt={channel.name} className="w-10 h-10 object-contain bg-white/10 p-1 rounded-md" />
                                        <span className="font-semibold text-white">{channel.name}</span>
                                    </div>
                                    {isLocked && <LockIcon className="text-gray-400" />}
                                </button>
                            );
                        })}
                    </div>
                </Card>
            </div>
            {isModalOpen && <SubscriptionModal onClose={() => setIsModalOpen(false)} onSubscribe={() => setIsSubscribed(true)} />}
        </div>
    );
};

export default TV;
