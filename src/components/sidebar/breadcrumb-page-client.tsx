"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "../ui/breadcrumb";

export default function BreadcrumbPageClient() {
  const path = usePathname();

  return (
    <BreadcrumbPage>
      {path === "/dashboard" && "Dashboard"}
      {path === "/create" && "Create"}
      {path === "/nft-marketplace" && "NFT Marketplace"}
    </BreadcrumbPage>
  );
}
