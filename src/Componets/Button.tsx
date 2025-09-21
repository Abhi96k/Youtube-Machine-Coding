const Button = ({ name }: { name: string }) => {
  return (
    <div>
      <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
