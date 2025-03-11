// src/js/modules/user.js

const userModule = (() => {
    const fetchUserProfile = async (userId) => {
        try {
            const response = await fetch(`/api/users/${userId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const userProfile = await response.json();
            return userProfile;
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const updateUserProfile = async (userId, userData) => {
        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const updatedProfile = await response.json();
            return updatedProfile;
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return {
        fetchUserProfile,
        updateUserProfile,
    };
})();

export default userModule;