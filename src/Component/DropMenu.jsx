import React from "react";

function DropMenu() {
  return (
    <div>
      <select className="text-slate-50 text-2xl border-2 rounded border-slate-50 bg-slate-900">
        <option className="text-slate-50">All Category</option>
        <option  className="bg-slate-400 text-slate-700" value="dog">Dog</option>
        <option className="bg-slate-400 text-slate-700" value="cat">Cat</option>
        <option className="bg-slate-400 text-slate-700" value="hamster">Hamster</option>
        <option className="bg-slate-400 text-slate-700" value="parrot">Parrot</option>
        <option className="bg-slate-400 text-slate-700" value="spider">Spider</option>
        <option className="bg-slate-400 text-slate-700" value="goldfish">Goldfish</option>
      </select>
    </div>
  );
}

export default DropMenu;
