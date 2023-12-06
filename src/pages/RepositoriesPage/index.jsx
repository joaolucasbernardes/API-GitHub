import React, { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom';

import { Container, Sidebar, Main, Loading } from './styles'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'
import { getUser, getRepos, getLangsFrom } from '../../services/api'



export default function RepositoriesPage() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {

      const [userResponse, repositoriesReponse] = await Promise.all ([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesReponse.data);

      setLanguages(getLangsFrom(repositoriesReponse.data));

      setLoading(false);
    }

    loadData();
  }, [])



  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  )
}