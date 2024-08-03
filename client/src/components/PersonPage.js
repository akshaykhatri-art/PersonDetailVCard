import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`/api/person/${id}`);
        setPerson(response.data);
      } catch (err) {
        setError("Person not found");
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Person Details</h1>
      <p>
        <strong>Forename:</strong> {person.Forename}
      </p>
      <p>
        <strong>SurName:</strong> {person.SurName}
      </p>
      <p>
        <strong>DOB:</strong> {person.DOB}
      </p>
    </div>
  );
};

export default PersonPage;
