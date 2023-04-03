import React from "react";

function DropMenu() {
  return (
    <div>
       <select
        className="block w-full bg-slate-800 text-slate-50 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      >
        <option selected>Category</option>
        <option value="India">India</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
}

export default DropMenu;
