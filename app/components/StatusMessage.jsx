const StatusMessage = ({ type, message }) => {
  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const textColor = type === 'success' ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`mx-auto mt-6 max-w-xl rounded-md p-4 ${bgColor}`}>
      <p className={`text-center font-semibold ${textColor}`}>
        {message}
      </p>
    </div>
  );
}; 