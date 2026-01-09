import React from 'react';
import { User, Mail, Edit3, LogOut } from 'lucide-react';

interface ProfilePageProps {
  onEditProfile: () => void;
  onLogout: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onEditProfile, onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">My Profile</h1>
                <p className="text-gray-400">Manage your personal information</p>
              </div>
            </div>
            <button
              onClick={onEditProfile}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              <Edit3 className="w-5 h-5" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
              U
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-white">Your Name</h2>
            <p className="text-gray-400 mt-1">AI Enthusiast</p>

            {/* Info */}
            <div className="w-full mt-10 space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4">
                <User className="w-5 h-5 text-purple-400" />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Username</p>
                  <p className="text-white font-medium">@username</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4">
                <Mail className="w-5 h-5 text-purple-400" />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">user@email.com</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10">
              <button
                onClick={onLogout}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-red-500/40 transition-all flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
