import React from "react";

// components
import ShowcaseCardDropdown from "../../../components/Admin/Dropdowns/ShowcaseCardDropdown";
import CardShowcaseItem from "../../../components/User/CardShowcaseItem";

const AdminShowcase = () => {
  return (
    <div>
      <div className="grid lg:md:grid-cols-3 grid-cols-1 gap-8">
        <div className="relative">
          <CardShowcaseItem />
          <ShowcaseCardDropdown />
        </div>
      </div>
    </div>
  );
};

export default AdminShowcase;
