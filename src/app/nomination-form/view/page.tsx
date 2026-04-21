"use client";
import NominationForm from "@/src/components/forms/Nomination/NominationForm";
import { useSelector } from "react-redux";
import { RootState } from "@/src/hook/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React from "react";

const ViewNominationPage = () => {
  const router = useRouter();
  const currentNomination = useSelector(
    (state: RootState) => state.nominations.currentNomination,
  );

  useEffect(() => {
    if (!currentNomination) {
      router.push("/kalpadmin/dashboard"); // Redirect if no nomination is selected (e.g. on refresh)
    }
  }, [currentNomination, router]);

  if (!currentNomination) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg font-semibold text-navy">No nomination selected</p>
          <p className="text-sm text-text-muted">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NominationForm readOnly={true} />
    </div>
  );
};

export default ViewNominationPage;
