interface LogoutPopupProps {
    onConfirm: () => void;
    onCancel: () => void;
}
export const LogoutPopup: React.FC<LogoutPopupProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className="absolute right-10 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
            <p className="text-gray-700 mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end">
                <button
                    onClick={onConfirm}
                    className="mr-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                >
                    Logout
                </button>
                <button
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default LogoutPopup;
