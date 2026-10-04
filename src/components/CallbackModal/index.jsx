const CallbackModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900">Request Submitted!</h2>

        <p className="mt-4 text-gray-600">
          Thank you for your interest. Our team will contact you soon.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CallbackModal;
