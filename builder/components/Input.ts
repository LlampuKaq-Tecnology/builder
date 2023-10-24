export const Input = (id: string, label: string) => {
  return `
<div className="block mt-5">
          <div className="relative">
            <input
              autoComplete="off"
              id=${id}
              type="text"
              required
              className="focus:outline-none w-full bg-transparent border-b p-2 block text-base dark:text-white text-black"
            />
            <span className="highlight absolute pointer-events-none" />
            <span className="bar relative block " />
            <label className="label capitalize absolute pointer-events-none text-base dark:text-white text-black">
              ${label}
            </label>
          </div>
        </div>`;
};
