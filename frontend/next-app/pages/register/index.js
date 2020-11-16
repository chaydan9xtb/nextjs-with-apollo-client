import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const GETACC = gql`
  query {
    getUsers {
      id
      username
      password
    }
  }
`;

export default function Register() {
  const { data } = useQuery(GETACC);
  const router = useRouter();
  return (
    <div className="App">
      <span style={{ cursor: "pointer" }} onClick={() => router.push("/about")}>
        Click here to read more
      </span>
    </div>
  );
}
