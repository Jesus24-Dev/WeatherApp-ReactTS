interface SearchFormAttributes {
  handleSubmit: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function SearchForm({
  handleChange,
  handleSubmit,
  value,
}: SearchFormAttributes) {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          id="city"
          onChange={handleChange}
          value={value}
          placeholder="e.g. London, Tokyo, Caracas"
          className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 placeholder-gray-400 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className={`absolute right-2 px-4 py-1.5 rounded-full text-white font-medium transition-all duration-200 ${
            !value.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Search
        </button>
      </div>
      <label 
        htmlFor="city" 
        className="block mt-2 ml-5 text-sm text-gray-500"
      >
        Write a city name
      </label>
    </form>
  );
}
