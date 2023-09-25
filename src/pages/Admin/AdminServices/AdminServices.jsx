import React from "react";

// components
import ServiceCardRegular from "../../../components/User/ServiceCardRegular";
import ServiceCardDropdown from "../../../components/Admin/Dropdowns/ServiceCardDropdown";

const AdminServices = () => {
  return (
    <div>
      <div className="grid lg:md:grid-cols-2 grid-cols-1 gap-8">
        <div className="relative">
          <ServiceCardRegular />
          <ServiceCardDropdown />
        </div>
        <div className="relative">
          <ServiceCardRegular />
          <ServiceCardDropdown />
        </div>
        <div className="relative">
          <ServiceCardRegular />
          <ServiceCardDropdown />
        </div>
        <div className="relative">
          <ServiceCardRegular />
          <ServiceCardDropdown />
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
