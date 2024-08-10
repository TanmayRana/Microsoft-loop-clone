"use client";

import React from "react";
import SideNav from "../../_components/SideNav";
import DocumentEditorSection from "../../_components/DocumentEditorSection";
import { Room } from "@/app/Room";

const WorkspaceDocument = ({ params }) => {
  console.log(params);

  return (
    <Room params={params}>
      <div>
        {/* Sode Bar */}
        <div className="">
          <SideNav params={params} />
        </div>

        {/* Document */}

        <div className="md:ml-72">
          <DocumentEditorSection params={params} />
        </div>
      </div>
    </Room>
  );
};

export default WorkspaceDocument;

// http://localhost:3000/workspace/1722935458707/ced174a1-0b0f-4d90-9365-4b7fdee6934e
