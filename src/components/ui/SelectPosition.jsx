const inpuStyle =
  "flex items-center space-x-2 w-full rounded-md border-2 border-gray-300 text-slate-700 transition-colors focus-within:border-sky-500";

export const SelectPosition = ({ field, form, ...props }) => {
  return (
    <div
      className={`${inpuStyle} ${
        props.disabled ? "cursor-not-allowed bg-gray-200 " : ""
      }`}
    >
      <select
        className=" h-full w-full rounded-md py-[7.25px] px-[9px] transition-colors placeholder:normal-case focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:placeholder:text-gray-400"
        {...field}
        {...props}
      >
        <option value="captain">Captain</option>
        <option value="fist_mate">First Mate</option>
        <option value="quarter_master">Quarter Master</option>
        <option value="boatswain">Boatswain</option>
        <option value="powder_monkey">Powder Monkey</option>
      </select>
    </div>
  );
};
