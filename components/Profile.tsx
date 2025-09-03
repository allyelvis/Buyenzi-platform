
import React, { useState, useRef } from 'react';
import Card from './Card';
import { MOCK_USER_PROFILE } from '../constants';
import { UserProfile } from '../types';

const CameraIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const TrashIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);

const FormField: React.FC<{ label: string; id: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder?: string; }> = ({ label, id, value, onChange, type = 'text', placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
    </div>
);

const ToggleSwitch: React.FC<{ enabled: boolean; setEnabled: (enabled: boolean) => void; }> = ({ enabled, setEnabled }) => (
    <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => setEnabled(!enabled)}
        className={`${enabled ? 'bg-brand-primary' : 'bg-gray-600'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0`}
    >
        <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
    </button>
);

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile>(MOCK_USER_PROFILE);
    const [name, setName] = useState(profile.name);
    const [username, setUsername] = useState(profile.username);
    const [email, setEmail] = useState(profile.email);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleProfileSave = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedProfile = {
            ...profile,
            name,
            username,
            email,
            profilePictureUrl: imagePreview ?? profile.profilePictureUrl,
        };
        setProfile(updatedProfile);
        setImagePreview(null); // Clear preview after saving
        alert('Profile updated successfully!');
    };
    
    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Password changed successfully (simulation).');
    };

    const handleDeleteAccount = () => {
        if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
            alert('Account deleted successfully (simulation).');
        }
    };

    return (
        <div className="p-4 md:p-8 space-y-8">
            <h1 className="text-3xl font-bold text-white">User Profile</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1 space-y-8">
                    <Card title="Profile Picture" className="text-center">
                        <div className="relative w-40 h-40 mx-auto">
                            <img
                                src={imagePreview || profile.profilePictureUrl}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover border-4 border-gray-700"
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                             <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                                accept="image/png, image/jpeg"
                            />
                            <button onClick={() => fileInputRef.current?.click()} className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-gray-700 hover:bg-gray-600 py-2.5 rounded-lg transition-colors">
                                <CameraIcon />
                                Upload Picture
                            </button>
                            <button onClick={() => setProfile(p => ({...p, profilePictureUrl: MOCK_USER_PROFILE.profilePictureUrl}))} className="text-xs text-gray-400 hover:text-white transition-colors">
                                Remove Picture
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <Card title="Personal Information">
                        <form onSubmit={handleProfileSave} className="space-y-4">
                            <FormField label="Full Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <FormField label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <FormField label="Email Address" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                            <div className="pt-2">
                                <button type="submit" className="w-full font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-2.5 rounded-lg transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </Card>
                    <Card title="Account Security">
                        <form onSubmit={handlePasswordChange} className="space-y-4 pb-6 border-b border-gray-700">
                             <h3 className="text-lg font-semibold text-white">Change Password</h3>
                             <FormField label="Current Password" id="current-password" value="" onChange={()=>{}} type="password" placeholder="••••••••" />
                             <FormField label="New Password" id="new-password" value="" onChange={()=>{}} type="password" placeholder="••••••••" />
                             <FormField label="Confirm New Password" id="confirm-password" value="" onChange={()=>{}} type="password" placeholder="••••••••" />
                             <button type="submit" className="w-full font-semibold bg-gray-700 hover:bg-gray-600 py-2.5 rounded-lg transition-colors">Update Password</button>
                        </form>
                        <div className="py-6 border-b border-gray-700">
                             <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
                             <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-white">Enable 2FA</p>
                                    <p className="text-sm text-gray-400">Secure your account with an extra layer of protection.</p>
                                </div>
                                <ToggleSwitch enabled={is2FAEnabled} setEnabled={setIs2FAEnabled} />
                             </div>
                        </div>
                        <div className="pt-6">
                            <h3 className="text-lg font-semibold text-red-400">Danger Zone</h3>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-white">Delete Account</p>
                                    <p className="text-sm text-gray-400">Permanently delete your account and all of your data.</p>
                                </div>
                                <button onClick={handleDeleteAccount} className="font-semibold text-white bg-red-600/80 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;