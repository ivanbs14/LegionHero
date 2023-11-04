import React, { useState, useEffect } from 'react';
import { Conteiner } from './styles';
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';

export function Home() {
  const [metahumans, setMetahumans] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [filteredMetahumans, setFilteredMetahumans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  /* fetch metahumans from API */
  useEffect(() => {
    async function fetchHero() {
      const response = await api.get("/");
      setMetahumans(response.data);
      setFilteredMetahumans(response.data);
    }
      
    fetchHero();
  }, []);

  /* select 2 ids for hero route */
  useEffect(() => {
    if (selectedCardIds.length === 2) {
      navigate(`/hero/${selectedCardIds.join(',')}`);
    }
  }, [selectedCardIds]);

  /* updates state according to input */
  useEffect(() => {
    const filtered = metahumans.filter(metahuman =>
      metahuman.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMetahumans(filtered);
  }, [searchTerm]);

  /* check if input is empty */
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredMetahumans(metahumans);
    }
  }, [searchTerm, metahumans]);

  /* handle clicks on cards */
  const handleCardClick = (id) => {
    if (selectedCardIds.includes(id)) {
      setSelectedCardIds(selectedCardIds.filter(cardId => cardId !== id));
    } else {
      if (selectedCardIds.length < 2) {
        setSelectedCardIds([...selectedCardIds, id]);
      }
    }
  };

  /* update search status */
  const searchMetahumans = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  return (
    <Conteiner>
      <Navbar onSearch={searchMetahumans} searchTerm={searchTerm} />
      <div className='legion'>
        {filteredMetahumans.map((metahuman) => (
          <li key={String(metahuman.id)}>
            <Card
              idHero={metahuman.id}
              title={metahuman.name}
              pts={metahuman.powerstats.power}
              person={metahuman.images.sm}
              borderColor={metahuman.appearance.eyeColor === "-" ? "gray" : metahuman.appearance.eyeColor}
              onClick={() => handleCardClick(metahuman.id)}
              selected={selectedCardIds.includes(metahuman.id)}
            />
          </li>
        ))}
      </div>
    </Conteiner>
  );
}
