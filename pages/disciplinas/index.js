import Disciplines from "@/components/Disciplines";
import { getAllDisciplines } from "@/services/discipline.service"
import React from "react";

/**
 * @param {{disciplines: import("../../services/discipline.service").Discipline[]}} props
 */
export default function Page({ disciplines }) {
  return (
    <>
      <Disciplines disciplines={disciplines} />
    </>
  )
}

export async function getStaticProps() {
  const disciplines = getAllDisciplines();
  return {
    props: { disciplines: disciplines }
  }
}