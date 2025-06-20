import React from "react";
import { SearchInfo } from "../app/types";

interface SearchInfoProps {
  searchInfo: SearchInfo;
}

const SearchStages = ({ searchInfo }: SearchInfoProps) => {
  if (!searchInfo || !searchInfo.stages || searchInfo.stages.length === 0)
    return null;

  return (
    <div className="mb-3 mt-1 pl-2">
      <div className="flex flex-col space-y-4 text-sm text-gray-700">
        {/* Searching Stage */}
        {searchInfo.stages.includes("searching") && (
          <div className="flex flex-col">
            <span className="font-medium mb-2">Searching the web</span>
            <div className="flex flex-wrap gap-2 pl-2 mt-1">
              <div className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 inline-flex items-center">
                {searchInfo.query}
              </div>
            </div>
          </div>
        )}

        {/* Reading Stage */}
        {searchInfo.stages.includes("reading") && (
          <div className="flex flex-col">
            <span className="font-medium mb-2">Reading resources</span>
            {searchInfo.urls && searchInfo.urls.length > 0 && (
              <div className="pl-2 space-y-1">
                <div className="flex flex-col gap-2">
                  {searchInfo.urls.map((url, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 max-w-[400px] hover:bg-gray-50"
                    >
                      {url}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Writing Stage */}
        {searchInfo.stages.includes("writing") && (
          <div className="font-medium">Writing final answer</div>
        )}

        {/* Error Message */}
        {searchInfo.stages.includes("error") && (
          <>
            <span className="font-medium">Search error</span>
            <div className="pl-4 text-xs text-red-500 mt-1">
              {searchInfo.error || "An error occurred during search."}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchStages;
