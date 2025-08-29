import svgPaths from "./svg-okbbfnoanp";

// Replace unavailable figma:asset imports with a lightweight SVG data URI placeholder
const IMG_PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="100%" height="100%" fill="%23e5e7eb"/></svg>';

const imgAvatar = IMG_PLACEHOLDER;
const imgImage13 = IMG_PLACEHOLDER;
const imgAvatar1 = IMG_PLACEHOLDER;
const imgAvatar2 = IMG_PLACEHOLDER;
const imgAvatar3 = IMG_PLACEHOLDER;
const imgAvatar4 = IMG_PLACEHOLDER;
const imgAvatar5 = IMG_PLACEHOLDER;

function Frame427319192() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-[30px] py-1.5 relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[30px]"
            data-name="Avatar"
            style={{ backgroundImage: `url('${imgAvatar}')` }}
          />
          <div
            className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
            data-name="Text and supporting text"
          >
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
              <p className="block leading-[20px] whitespace-pre">Layers</p>
            </div>
            <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
              <div
                className="overflow-clip relative shrink-0 size-4"
                data-name="Social icon"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 16"
                >
                  <g id="Group">
                    <path
                      d={svgPaths.p114d3270}
                      fill="var(--fill-0, #98A2B3)"
                      id="Vector"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f8fafb] box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2.5 py-[8.5px] relative rounded-[3px] shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#3a5ba0] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2.5 py-[8.5px] relative rounded-[3px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2.5 py-[8.5px] relative rounded-[3px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Lists</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2.5 py-[8.5px] relative rounded-[3px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Alerts</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame427319207() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[50px] items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-center bg-cover bg-no-repeat h-[26px] shrink-0 w-[121px]"
        data-name="image 13"
        style={{ backgroundImage: `url('${imgImage13}')` }}
      />
      <Frame23 />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[12.5%]" data-name="search">
      <div className="absolute inset-[-5.556%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g id="search">
            <path
              d={svgPaths.p31e16900}
              id="stroke"
              stroke="var(--stroke-0, #7C8385)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M11.5 11.5L14.5 14.5"
              id="stroke_2"
              stroke="var(--stroke-0, #7C8385)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Search1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="search"
    >
      <Search />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f8fafb] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start px-2.5 py-2 relative rounded-lg shrink-0 w-[389px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#f0efef] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Search1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#8a9193] text-[12px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Search...</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute inset-[12.5%_20.83%]" data-name="profile">
      <div className="absolute inset-[-3.33%_-4.29%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 17"
        >
          <g id="profile">
            <path
              d={svgPaths.p14209900}
              id="stroke"
              stroke="var(--stroke-0, #7C8385)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p39127b80}
              id="stroke_2"
              stroke="var(--stroke-0, #7C8385)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="profile">
      <Profile />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f6f8f9] box-border content-stretch flex flex-row gap-2.5 items-start justify-start overflow-clip p-[8px] relative rounded-[36px] shrink-0">
      <Profile1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[18px] items-start justify-start p-0 relative shrink-0">
      <Frame24 />
      <Frame32 />
    </div>
  );
}

function Frame427319209() {
  return (
    <div className="absolute box-border content-stretch flex flex-row items-start justify-between left-0 px-10 py-[22px] top-0 w-[1440px]">
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame427319207 />
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f8fafb] box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-3.5 py-[8.5px] relative rounded-[3px] shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#3a5ba0] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          New Appointments
        </p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-3.5 py-[8.5px] relative rounded-[3px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Promotions</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame427319210() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 pl-10 pr-2.5 py-3.5 top-[213px] w-[1440px]">
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame34 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-5" data-name="plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="plus">
          <path
            d={svgPaths.p358da2c0}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[#415a9b] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip pl-3 pr-4 py-2.5 rounded-md top-[307px]"
      data-name="Button"
      style={{ left: "calc(83.333% + 54px)" }}
    >
      <Plus />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Add To List</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute inset-[16.67%_12.5%]" data-name="filter">
      <div className="absolute inset-[-9.38%_-8.33%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 20"
        >
          <g id="filter">
            <path
              d={svgPaths.p3f51bd00}
              id="stroke"
              stroke="var(--stroke-0, #415A9B)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Filter1() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="filter">
      <Filter />
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Filter1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">All Filters</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#f9fbfc] h-10 relative rounded-md shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-row gap-[18px] h-10 items-center justify-center overflow-clip px-3.5 py-2.5 relative">
        <Frame58 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#415a9b] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function ViewColumn() {
  return (
    <div
      className="absolute left-[3px] size-[18px] top-[3px]"
      data-name="view column"
    >
      <div className="absolute inset-[-4.167%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="view column">
            <rect
              height="18"
              id="Rectangle 112"
              rx="4"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              width="18"
              x="1"
              y="1"
            />
            <path
              d="M7 18L7 2"
              id="stroke"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M13 18L13 2"
              id="stroke_2"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ViewColumn1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="view column"
    >
      <ViewColumn />
    </div>
  );
}

function Frame60() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <ViewColumn1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Edit Columns</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative size-full" data-name="chevron down">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 12"
        >
          <g id="chevron down">
            <path
              d="M1 1L6 6L1 11"
              id="stroke"
              stroke="var(--stroke-0, #797E7D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron down">
      <div className="absolute flex inset-[41.67%_29.17%_37.5%_29.17%] items-center justify-center">
        <div className="flex-none h-2.5 rotate-[90deg] w-[5px]">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#f9fbfc] h-10 relative rounded-md shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-row gap-[18px] h-10 items-center justify-center overflow-clip px-3.5 py-2.5 relative">
        <Frame60 />
        <ChevronDown1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function SortArrowDown() {
  return (
    <div
      className="absolute inset-[17.71%_9.38%_26.04%_9.38%]"
      data-name="sort-arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 14"
      >
        <g id="sort-arrow-down">
          <path
            d={svgPaths.p339cf780}
            fill="var(--fill-0, #667085)"
            id="combo shape"
          />
        </g>
      </svg>
    </div>
  );
}

function HugeIconInterfaceSolidSortArrowDown() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="Huge-icon/interface/solid/sort-arrow-down"
    >
      <SortArrowDown />
    </div>
  );
}

function Frame61() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <HugeIconInterfaceSolidSortArrowDown />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Sort By</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative size-full" data-name="chevron down">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 12"
        >
          <g id="chevron down">
            <path
              d="M1 1L6 6L1 11"
              id="stroke"
              stroke="var(--stroke-0, #797E7D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron down">
      <div className="absolute flex inset-[41.67%_29.17%_37.5%_29.17%] items-center justify-center">
        <div className="flex-none h-2.5 rotate-[90deg] w-[5px]">
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#f9fbfc] h-10 relative rounded-md shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-row gap-[18px] h-10 items-center justify-center overflow-clip px-3.5 py-2.5 relative">
        <Frame61 />
        <ChevronDown3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative size-full" data-name="chevron down">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 12"
        >
          <g id="chevron down">
            <path
              d="M1 1L6 6L1 11"
              id="stroke"
              stroke="var(--stroke-0, #797E7D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron down">
      <div className="absolute flex inset-[41.67%_29.17%_37.5%_29.17%] items-center justify-center">
        <div className="flex-none h-2.5 rotate-[90deg] w-[5px]">
          <ChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[#f9fbfc] h-10 relative rounded-md shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-row gap-[18px] h-10 items-center justify-center overflow-clip px-3.5 py-2.5 relative">
        <Frame62 />
        <ChevronDown5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-3.5 items-center justify-start left-10 p-0 top-[308px]">
      <Button1 />
      <div className="bg-[#ebebeb] h-10 shrink-0 w-px" />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function UExport() {
  return (
    <div className="relative shrink-0 size-6" data-name="u:export">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="u:export">
          <path
            d={svgPaths.p2eeba600}
            id="Vector 2527"
            stroke="var(--stroke-0, #415A9B)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p36b6be80}
            fill="var(--stroke-0, #415A9B)"
            id="Vector 2528"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <UExport />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Export</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-[#f9fbfc] h-10 rounded-md top-[308px]"
      data-name="Button"
      style={{ left: "calc(75% + 46px)" }}
    >
      <div className="box-border content-stretch flex flex-row gap-[18px] h-10 items-center justify-center overflow-clip px-3.5 py-2.5 relative">
        <Frame63 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#415a9b] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="arrow-left">
          <path
            d={svgPaths.p3f037400}
            id="Icon"
            stroke="var(--stroke-0, #344054)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function PaginationButtonGroupBase() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center order-9 px-4 py-2.5 relative shrink-0"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <ArrowLeft />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Previous</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase1() {
  return (
    <div
      className="bg-[#eff7ff] box-border content-stretch flex flex-col h-9 items-center justify-center order-8 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-9 items-center justify-center order-7 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-9 items-center justify-center order-6 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-9 items-center justify-center order-5 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#d0d5dd] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">...</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-9 items-center justify-center order-4 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-9 items-center justify-center order-3 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function PaginationButtonGroupBase7() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-9 items-center justify-center order-2 p-[10px] relative shrink-0 w-10"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow-right">
          <path
            d={svgPaths.p3f191380}
            id="Icon"
            stroke="var(--stroke-0, #344054)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function PaginationButtonGroupBase8() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center order-1 px-4 py-2.5 relative shrink-0"
      data-name="_Pagination button group base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#d0d5dd] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Next</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function PaginationButtonGroup() {
  return (
    <div
      className="h-9 relative rounded-lg shrink-0"
      data-name="Pagination button group"
    >
      <div className="box-border content-stretch flex flex-row-reverse h-9 items-start justify-start overflow-clip p-0 relative">
        <PaginationButtonGroupBase />
        <PaginationButtonGroupBase1 />
        <PaginationButtonGroupBase2 />
        <PaginationButtonGroupBase3 />
        <PaginationButtonGroupBase4 />
        <PaginationButtonGroupBase5 />
        <PaginationButtonGroupBase6 />
        <PaginationButtonGroupBase7 />
        <PaginationButtonGroupBase8 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Pagination() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-between left-10 p-0 top-[921px] w-[1360px]"
      data-name="Pagination"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          1 - 25 of 263.033M
        </p>
      </div>
      <PaginationButtonGroup />
    </div>
  );
}

function CheckboxBase() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function TableHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Table header"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Name</p>
      </div>
    </div>
  );
}

function ArrowsDiagramsArrow() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Arrows, Diagrams/Arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              d={svgPaths.p12e9b500}
              id="Path"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p232e3280}
              id="Path_2"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Path_3"></g>
        </g>
      </svg>
    </div>
  );
}

function Frame427319216() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <TableHeader />
      <ArrowsDiagramsArrow />
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div
      className="bg-gray-50 h-11 relative shrink-0 w-full"
      data-name="Table header cell"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start px-[30px] py-3 relative w-full">
          <CheckboxBase />
          <Frame427319216 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase1 />
    </div>
  );
}

function SocialIcon() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Lindsey Levin</p>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox />
          <TextAndSupportingText />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase2 />
    </div>
  );
}

function SocialIcon1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Carter Dorwart</p>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox1 />
          <TextAndSupportingText1 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase3() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase3 />
    </div>
  );
}

function SocialIcon2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon2 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Ahmad Philips</p>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox2 />
          <TextAndSupportingText2 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase4() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase4 />
    </div>
  );
}

function SocialIcon3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon3 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Kaiya Westervelt</p>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox3 />
          <TextAndSupportingText3 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase5() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase5 />
    </div>
  );
}

function SocialIcon4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon4 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">James Saris</p>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox4 />
          <TextAndSupportingText4 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase6() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase6 />
    </div>
  );
}

function SocialIcon5() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon5 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Livia Siphron</p>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox5 />
          <TextAndSupportingText5 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase7() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase7 />
    </div>
  );
}

function SocialIcon6() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon6 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Corey Philips</p>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox6 />
          <TextAndSupportingText6 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase8() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase8 />
    </div>
  );
}

function SocialIcon7() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon7 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Hanna Donin</p>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox7 />
          <TextAndSupportingText7 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase9() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase9 />
    </div>
  );
}

function SocialIcon8() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon8 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Alfonso Bergson</p>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox8 />
          <TextAndSupportingText8 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase10() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 size-5"
      data-name="_Checkbox base"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-md"
      />
    </div>
  );
}

function Checkbox9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckboxBase10 />
    </div>
  );
}

function SocialIcon9() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <SocialIcon9 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#415a9b] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Kadin Dokidis</p>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Checkbox9 />
          <TextAndSupportingText9 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Column"
    >
      <TableHeaderCell />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Table header"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Job Title</p>
      </div>
    </div>
  );
}

function ArrowsDiagramsArrow1() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Arrows, Diagrams/Arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              d={svgPaths.p12e9b500}
              id="Path"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p232e3280}
              id="Path_2"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Path_3"></g>
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div
      className="bg-gray-50 h-11 relative shrink-0 w-full"
      data-name="Table header cell"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-11 items-center justify-start px-[30px] py-3 relative w-full">
          <TableHeader1 />
          <ArrowsDiagramsArrow1 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Worldwide Sales Director
        </p>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText10 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">VP Marketing</p>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText11 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Vice President User Experience Design Lead
        </p>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText12 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">US Equity Sales</p>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText13 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          UK Chief Commercial Officer
        </p>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText14 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Technology Strategy Director
        </p>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText15 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Senior Manager, Scotland Communications
        </p>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <TextAndSupportingText16 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Column"
    >
      <TableHeaderCell1 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell10 />
      <TableCell14 />
      <TableCell12 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Table header"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Company</p>
      </div>
    </div>
  );
}

function ArrowsDiagramsArrow2() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Arrows, Diagrams/Arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              d={svgPaths.p12e9b500}
              id="Path"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p232e3280}
              id="Path_2"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Path_3"></g>
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div
      className="bg-gray-50 h-11 relative shrink-0 w-full"
      data-name="Table header cell"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-11 items-center justify-start px-[30px] py-3 relative w-full">
          <TableHeader2 />
          <ArrowsDiagramsArrow2 />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[30px]"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar1}')` }}
    />
  );
}

function SocialIcon10() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      <SocialIcon10 />
    </div>
  );
}

function TextAndSupportingText20() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Catalog</p>
      </div>
      <Frame52 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-[30px] py-1.5 relative w-full">
          <Avatar />
          <TextAndSupportingText20 />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[30px]"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar2}')` }}
    />
  );
}

function SocialIcon11() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      <SocialIcon11 />
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Circooles</p>
      </div>
      <Frame53 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-[30px] py-1.5 relative w-full">
          <Avatar1 />
          <TextAndSupportingText21 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[30px]"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar3}')` }}
    />
  );
}

function SocialIcon12() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      <SocialIcon12 />
    </div>
  );
}

function TextAndSupportingText22() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Command+R</p>
      </div>
      <Frame55 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-[30px] py-1.5 relative w-full">
          <Avatar2 />
          <TextAndSupportingText22 />
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[30px]"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar4}')` }}
    />
  );
}

function SocialIcon13() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      <SocialIcon13 />
    </div>
  );
}

function TextAndSupportingText23() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Hourglass</p>
      </div>
      <Frame57 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-[30px] py-1.5 relative w-full">
          <Avatar3 />
          <TextAndSupportingText23 />
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[30px]"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar5}')` }}
    />
  );
}

function SocialIcon15() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="Social icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p114d3270}
            fill="var(--fill-0, #98A2B3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
      <SocialIcon15 />
    </div>
  );
}

function TextAndSupportingText25() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text and supporting text"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Sisyphus</p>
      </div>
      <Frame65 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-[30px] py-1.5 relative w-full">
          <Avatar5 />
          <TextAndSupportingText25 />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Column"
    >
      <TableHeaderCell2 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <Frame427319192 />
      <TableCell25 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell25 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Table header"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mail</p>
      </div>
    </div>
  );
}

function ArrowsDiagramsArrow3() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Arrows, Diagrams/Arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              d={svgPaths.p12e9b500}
              id="Path"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p232e3280}
              id="Path_2"
              stroke="var(--stroke-0, #667085)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Path_3"></g>
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div
      className="bg-gray-50 h-11 relative shrink-0 w-full"
      data-name="Table header cell"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-11 items-center justify-start px-[30px] py-3 relative w-full">
          <TableHeader3 />
          <ArrowsDiagramsArrow3 />
        </div>
      </div>
    </div>
  );
}

function Mail02() {
  return (
    <div className="relative shrink-0 size-6" data-name="mail-02">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="mail-02">
          <path
            d={svgPaths.p38991c00}
            id="Icon"
            stroke="var(--stroke-0, #98A2B3)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative rounded-lg shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-3 py-1.5 relative">
        <Mail02 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table cell">
      <div
        aria-hidden="true"
        className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[50px] items-center justify-start px-[30px] py-1.5 relative w-full">
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0"
      data-name="Column"
    >
      <TableHeaderCell3 />
      {[...Array(10).keys()].map((_, i) => (
        <TableCell30 key={i} />
      ))}
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-[1360px]"
      data-name="Content"
    >
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute h-[520px] left-10 rounded top-[377px]">
      <div className="box-border content-stretch flex flex-col gap-2.5 h-[520px] items-start justify-start overflow-clip p-0 relative">
        <Content />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eaecf0] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded size-full"
      data-name="Dashboard"
    >
      <Frame427319209 />
      <Frame427319210 />
      <Button />
      <Frame59 />
      <Button5 />
      <Pagination />
      <Frame56 />
    </div>
  );
}