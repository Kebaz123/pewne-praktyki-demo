import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import { NavLink } from 'react-router-dom';

import { translations, type Language } from '@/locales';
import { useSettings } from '@/context/SettingsContext';

import '@/styles/Search.css';
import SearchIcon from '@/assets/icons/search.svg?react';
// import LocationIcon from '@/assets/icons/location.svg?react';
// import PersonIcon from '@/assets/icons/person.svg?react';

const Search = () => {
  const { language }: { language: Language } = useSettings();
  const t = translations[language].search;

  type Offer = {
    id: string;
    opis: string;
    zawod: string;
    adres: {
      ulica: string;
      miejscowosc: string;
      wojewodztwo: string;
    };
    telefon_kontaktowy: string;
    email_kontaktowy: string;
    createdAt: string;
    firma: {
      id: number;
      nazwa: string;
      logo: string;
      miasto: string;
    };
  };

  // const isDataCorrect = (data: any): data is Offer[] => {
  //   return (
  //     Array.isArray(data) &&
  //     data.every(
  //       obj =>
  //         typeof obj === 'object' &&
  //         obj !== null &&
  //         typeof obj.id === 'string' &&
  //         typeof obj.opis === 'string' &&
  //         typeof obj.zawod === 'string' &&
  //         typeof obj.adres === 'object' &&
  //         obj.adres !== null &&
  //         typeof obj.adres.ulica === 'string' &&
  //         typeof obj.adres.miejscowosc === 'string' &&
  //         typeof obj.adres.wojewodztwo === 'string' &&
  //         typeof obj.telefon_kontaktowy === 'string' &&
  //         typeof obj.email_kontaktowy === 'string' &&
  //         typeof obj.createdAt === 'string' &&
  //         typeof obj.firma === 'object' &&
  //         obj.firma !== null &&
  //         typeof obj.firma.id === 'number' &&
  //         typeof obj.firma.nazwa === 'string' &&
  //         typeof obj.firma.logo === 'string' &&
  //         typeof obj.firma.miasto === 'string',
  //     )
  //   );
  // };

  //type City = { firma: { miasto: string } };
  //type Occupation = { zawod: string };
  type SortedOccupation = { name: string; count: number };

  const typeOptions = [
    t.greenBox.all,
    t.greenBox.stationary,
    t.greenBox.remote,
  ];

  const distanceOptions = [
    '+ 0 km',
    '+ 10 km',
    '+ 20 km',
    '+ 30 km',
    '+ 50 km',
    '+ 100 km',
  ];

  const [offerData, setOfferData] = useState<Offer[]>([]);
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const [sortedOccupations, setSortedOccupations] =
    useState<SortedOccupation[]>();

  const [selectedType, setSelectedType] = useState<string>(t.greenBox.all);
  const [selectedCity, setSelectedCity] = useState<string>(t.greenBox.all);
  const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setCityOptions([t.greenBox.all]);
    // fetch('http://localhost:5000/api/praktyki/przegladaj')
    //   .then(response => response.json())
    //   .then(res => {
    //     if (!isDataCorrect(res.data)) {
    //       setOfferData([]);
    //       setSortedOccupations([]);
    //       return;
    //     }

    //     setOfferData(res.data);

    //     const cityData: City[] = offerData;
    //     const cities = Array.from(
    //       new Set(cityData.map(item => item.firma.miasto)),
    //     );

    //     //sortowanie alfabetyczne miast
    //     setCityOptions([
    //       t.greenBox.all,
    //       ...[...cities].sort((a, b) => a.localeCompare(b)),
    //     ]);

    //     //pobranie listy zawodów i ich ilości z offerData
    //     const occupations = Array.from(
    //       offerData.reduce((map, item: Occupation) => {
    //         map.set(item.zawod, (map.get(item.zawod) ?? 0) + 1);
    //         return map;
    //       }, new Map<string, number>()),
    //       ([name, count]) => ({ name, count }),
    //     );

    //     //sortowanie alfabetyczne zawodów
    //     setSortedOccupations(
    //       [...occupations].sort((a, b) => a.name.localeCompare(b.name)),
    //     );
    //   })
    //   .catch(err => console.error(err));
  }, []);

  const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };
  const cityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const toggleOccupation = (occupationName: string) => {
    setSelectedOccupations(prev =>
      prev.includes(occupationName)
        ? prev.filter(name => name !== occupationName)
        : [...prev, occupationName],
    );
  };

  // const filteredData = offerData
  //   //filtrowanie po typie praktyk
  //   .filter(() => selectedType !== 'Zdalne')
  //   //filtrowanie po mieście
  //   .filter(offer =>
  //     selectedCity === 'All' || selectedCity === 'Wszystkie'
  //       ? true
  //       : offer.firma.miasto === selectedCity,
  //   )
  //   //filtrowanie na podstawie checkboxow
  //   .filter(offer =>
  //     selectedOccupations.length === 0
  //       ? true
  //       : selectedOccupations.includes(offer.zawod),
  //   )
  //   //filtrowanie na podstawie searchboxa
  //   .filter(offer =>
  //     offer.firma.nazwa.toLowerCase().includes(searchText.toLowerCase()),
  //   );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [filtersOpen, setFiltersOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setFiltersOpen(!mobile);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="searchPage">
      <Helmet>
        <title>{t.title}</title>
      </Helmet>

      <button
        id="filterButton"
        className={filtersOpen ? 'purpleButton' : ''}
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        <span
          className={filtersOpen ? 'filterArrow rotatedArrow' : 'filterArrow'}
        >
          v
        </span>
        <span>{filtersOpen ? t.hideFilters : t.showFilters}</span>
      </button>

      <div id="optionPanel" className={filtersOpen ? 'panelOpen' : ''}>
        <div id="searchFilters">
          <div>
            <p>{t.greenBox.type}</p>
            <select value={selectedType} onChange={typeHandler}>
              {typeOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <p>{t.greenBox.city}</p>
            <select value={selectedCity} onChange={cityHandler}>
              {cityOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <p>{t.greenBox.distance}</p>
            <select>
              {distanceOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {sortedOccupations && sortedOccupations.length != 0 && (
          <div id="purpleBox">
            <p>{t.purpleBoxHeader}</p>
            <div id="occupationList">
              {sortedOccupations.map(occupation => {
                const selected = selectedOccupations.includes(occupation.name);
                return (
                  <button
                    key={occupation.name}
                    onClick={() => toggleOccupation(occupation.name)}
                    className={
                      selected
                        ? 'occupationButton selected'
                        : 'occupationButton'
                    }
                  >
                    <span className="occupationName">{occupation.name}</span>
                    <span className="offerCount">{occupation.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div id="mainPanel">
        <div id="searchField">
          <SearchIcon />
          <input
            type="text"
            placeholder={t.searchText}
            onChange={e => setSearchText(e.currentTarget.value)}
          />
        </div>

        <div id="offerList">
          <p id="noData">{t.noData}</p>
          {/* {filteredData.length == 0 ? (
            <div className="errorBox">
              <p>{t.errorTitle}</p>
              <span>{t.fetchError1}</span>
              <br />
              <span>{t.fetchError2}</span>
            </div>
          ) : (
            filteredData.map(offer => (
              <NavLink to={t.offerURL + offer.id} key={offer.id}>
                <img src={offer.firma.logo} />
                <div>
                  <p>{offer.firma.nazwa}</p>

                  <div className="infoLine">
                    <LocationIcon />
                    <span>
                      {offer.adres.miejscowosc}, {offer.adres.ulica}
                    </span>
                  </div>

                  <div className="infoLine">
                    <PersonIcon />
                    <span>{offer.zawod}</span>
                  </div>
                </div>
              </NavLink>
            ))
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Search;
