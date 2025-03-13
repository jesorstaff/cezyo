import SearchIcon from "../../assets/images/SearchIcon.svg"

const Search = () => {
  return (
    <form className="relative flex items-center">
      <input
        type="text"
        placeholder="Поиск бренда, товара, категории..."
        className="min-w-[468px] outline-none py-3 px-5 rounded-full border border-main-gray-light placeholder:text-main-gray"
      />
      <button
        type="submit"
        className="absolute right-1 bg-main-gray-light rounded-full cursor-pointer"
      >
        <img src={SearchIcon} alt="search" className="py-[11px] px-[37px]" />
      </button>
    </form>
  )
}

export default Search
