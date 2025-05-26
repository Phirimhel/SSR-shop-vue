<template>
   <div class="profile-container">
      <div v-if="!isAuthenticated" class="auth-prompt">
         <div class="auth-card">
            <div class="auth-header">
               <h2>Welcome to SSR Shop</h2>
               <p>Please sign in to access your profile</p>
            </div>
            <div class="auth-buttons">
               <button class="auth-button login" @click="handleLogin">
                  <span class="button-icon">🔑</span>
                  <span>Login</span>
               </button>
               <button class="auth-button register" @click="handleRegister">
                  <span class="button-icon">✨</span>
                  <span>Register</span>
               </button>
            </div>
         </div>
      </div>

      <div v-else class="profile-content">
         <div class="profile-header">
            <div class="profile-avatar">
               <img :src="userAvatar" alt="User Avatar" />
               <button class="edit-avatar">
                  <span class="edit-icon">📷</span>
               </button>
            </div>
            <div class="profile-info">
               <h1>{{ userName }}</h1>
               <p class="user-email">{{ userEmail }}</p>
               <div class="profile-stats">
                  <div class="stat-item">
                     <span class="stat-value">{{ orderCount }}</span>
                     <span class="stat-label">Orders</span>
                  </div>
                  <div class="stat-item">
                     <span class="stat-value">{{ wishlistCount }}</span>
                     <span class="stat-label">Wishlist</span>
                  </div>
                  <div class="stat-item">
                     <span class="stat-value">{{ reviewCount }}</span>
                     <span class="stat-label">Reviews</span>
                  </div>
               </div>
            </div>
         </div>

         <div class="profile-sections">
            <div class="section-card">
               <h3>Personal Information</h3>
               <div class="info-grid">
                  <div class="info-item">
                     <span class="info-label">Full Name</span>
                     <span class="info-value">{{ userName }}</span>
                  </div>
                  <div class="info-item">
                     <span class="info-label">Email</span>
                     <span class="info-value">{{ userEmail }}</span>
                  </div>
                  <div class="info-item">
                     <span class="info-label">Member Since</span>
                     <span class="info-value">{{ memberSince }}</span>
                  </div>
               </div>
               <button class="edit-button">
                  <span class="edit-icon">✏️</span>
                  Edit Profile
               </button>
            </div>

            <div class="section-card">
               <h3>Recent Activity</h3>
               <div class="activity-list">
                  <div
                     v-for="activity in recentActivities"
                     :key="activity.id"
                     class="activity-item"
                  >
                     <span class="activity-icon">{{ activity.icon }}</span>
                     <div class="activity-content">
                        <span class="activity-text">{{ activity.text }}</span>
                        <span class="activity-time">{{ activity.time }}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Mock data - replace with actual data from your auth system
const isAuthenticated = ref(false);
const userName = ref('John Doe');
const userEmail = ref('john.doe@example.com');
const userAvatar = ref('https://api.dicebear.com/7.x/avataaars/svg?seed=John');
const memberSince = ref('January 2024');
const orderCount = ref(12);
const wishlistCount = ref(8);
const reviewCount = ref(5);

const recentActivities = ref([
   {
      id: 1,
      icon: '🛍️',
      text: 'Placed an order for "Wireless Headphones"',
      time: '2 hours ago',
   },
   {
      id: 2,
      icon: '❤️',
      text: 'Added "Smart Watch" to wishlist',
      time: '1 day ago',
   },
   {
      id: 3,
      icon: '⭐',
      text: 'Reviewed "Bluetooth Speaker"',
      time: '2 days ago',
   },
]);

const handleLogin = () => {
   // Implement login logic
   isAuthenticated.value = true;
   console.log('Login clicked');
};

const handleRegister = () => {
   // Implement registration logic
   console.log('Register clicked');
};
</script>

<style scoped>
.profile-container {
   margin-top: 1rem;
   border-radius: 16px;
}

/* Auth Prompt Styles */
.auth-prompt {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
}

.auth-card {
   background: rgba(255, 255, 255, 0.95);
   backdrop-filter: blur(10px);
   padding: 2.5rem;
   border-radius: 20px;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
   text-align: center;
   width: 100%;
   border: 1px solid rgba(255, 255, 255, 0.2);
   transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.auth-card:hover {
   transform: translateY(-5px);
   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.auth-header {
   margin-bottom: 2.5rem;
   max-width: 600px;
   width: 100%;
}

.auth-header h2 {
   font-size: 2rem;
   font-weight: 700;
   background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   margin-bottom: 1rem;
}

.auth-header p {
   color: #666;
   font-size: 1.1rem;
   line-height: 1.5;
}

.auth-buttons {
   display: flex;
   gap: 1.5rem;
   justify-content: center;
   width: 100%;
   max-width: 600px;
}

.auth-button {
   flex: 1;
   max-width: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.8rem;
   padding: 1rem 2rem;
   border: none;
   border-radius: 12px;
   font-size: 1.1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   position: relative;
   overflow: hidden;
}

.auth-button::before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
   transition: all 0.3s ease;
}

.auth-button:hover::before {
   transform: translateY(100%);
}

.auth-button.login {
   background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
   color: white;
   box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.auth-button.register {
   background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
   color: white;
   box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
}

.auth-button:hover {
   transform: translateY(-3px);
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.button-icon {
   font-size: 1.2rem;
}

/* Profile Content Styles */
.profile-content {
   display: grid;
   gap: 2rem;
}

.profile-header {
   display: flex;
   gap: 2.5rem;
   background: rgba(255, 255, 255, 0.95);
   backdrop-filter: blur(10px);
   padding: 2.5rem;
   border-radius: 20px;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(255, 255, 255, 0.2);
}

.profile-avatar {
   position: relative;
   width: 180px;
   height: 180px;
}

.profile-avatar img {
   width: 100%;
   height: 100%;
   border-radius: 50%;
   object-fit: cover;
   border: 4px solid #3498db;
   box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
   transition: all 0.3s ease;
}

.profile-avatar:hover img {
   transform: scale(1.05);
   box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
}

.edit-avatar {
   position: absolute;
   bottom: 0;
   right: 0;
   background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
   border: none;
   width: 45px;
   height: 45px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.edit-avatar:hover {
   transform: scale(1.1) rotate(15deg);
   box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
}

.profile-info {
   flex: 1;
}

.profile-info h1 {
   font-size: 2.5rem;
   font-weight: 700;
   background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   margin-bottom: 0.5rem;
}

.user-email {
   color: #666;
   font-size: 1.1rem;
   margin-bottom: 2rem;
}

.profile-stats {
   display: flex;
   gap: 3rem;
}

.stat-item {
   text-align: center;
   padding: 1rem 2rem;
   background: rgba(255, 255, 255, 0.8);
   border-radius: 12px;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
   transition: all 0.3s ease;
}

.stat-item:hover {
   transform: translateY(-5px);
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.stat-value {
   display: block;
   font-size: 1.8rem;
   font-weight: 700;
   color: #2c3e50;
   margin-bottom: 0.5rem;
}

.stat-label {
   color: #666;
   font-size: 1rem;
   font-weight: 500;
}

.profile-sections {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
}

.section-card {
   background: rgba(255, 255, 255, 0.95);
   backdrop-filter: blur(10px);
   padding: 2rem;
   border-radius: 20px;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(255, 255, 255, 0.2);
   transition: all 0.3s ease;
}

.section-card:hover {
   transform: translateY(-5px);
   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.section-card h3 {
   color: #2c3e50;
   margin-bottom: 1.5rem;
   font-size: 1.4rem;
   font-weight: 600;
}

.info-grid {
   display: grid;
   gap: 1.5rem;
   margin-bottom: 2rem;
}

.info-item {
   display: flex;
   justify-content: space-between;
   padding: 1rem;
   background: rgba(255, 255, 255, 0.8);
   border-radius: 12px;
   transition: all 0.3s ease;
}

.info-item:hover {
   background: rgba(255, 255, 255, 0.95);
   transform: translateX(5px);
}

.info-label {
   color: #666;
   font-weight: 500;
}

.info-value {
   font-weight: 600;
   color: #2c3e50;
}

.edit-button {
   display: flex;
   align-items: center;
   gap: 0.8rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
   border: none;
   border-radius: 12px;
   color: #2c3e50;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   width: 100%;
   justify-content: center;
}

.edit-button:hover {
   background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
   transform: translateY(-3px);
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.activity-list {
   display: grid;
   gap: 1rem;
}

.activity-item {
   display: flex;
   align-items: center;
   gap: 1.2rem;
   padding: 1.2rem;
   background: rgba(255, 255, 255, 0.8);
   border-radius: 12px;
   transition: all 0.3s ease;
}

.activity-item:hover {
   background: rgba(255, 255, 255, 0.95);
   transform: translateX(5px);
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.activity-icon {
   font-size: 1.4rem;
   width: 40px;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: rgba(52, 152, 219, 0.1);
   border-radius: 10px;
}

.activity-content {
   flex: 1;
}

.activity-text {
   display: block;
   color: #2c3e50;
   font-weight: 500;
   margin-bottom: 0.5rem;
}

.activity-time {
   font-size: 0.9rem;
   color: #666;
}

@media (max-width: 768px) {
   .profile-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.5rem;
   }

   .profile-stats {
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
   }

   .stat-item {
      padding: 0.8rem 1.5rem;
   }

   .profile-sections {
      grid-template-columns: 1fr;
   }

   .auth-card {
      padding: 2rem 1.5rem;
   }

   .auth-buttons {
      flex-direction: column;
      gap: 1rem;
   }

   .auth-button {
      max-width: 100%;
   }
}
</style>
