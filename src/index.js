import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AcountProvider } from './context/AcountProvider';
import { FormUiProvider } from './context/FormUiContext';
import { CategoriesProvider } from './context/CategoriesProvider';
import { PlansProvider } from './context/PlansProvider';
import { AuthorsProvider } from './context/AuthorsProvider';
import { CharacterProvider } from './context/CharacterProvider';
import { ActorsProvider } from './context/ActorsProvider';
import { PackagesProvider } from './context/PackagesProvider';
import { FeaturesProvider } from './context/FeatureProvider';
import { MoviesProvider } from './context/MovieProvider';
import { EpisodesProvider } from './context/EpisodeProvider';
import { TrailersProvider } from './context/TrailersProvider'; 
import { AuThenProvider } from './context/AuthenProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
          <AcountProvider>
            <FormUiProvider>
                    <CategoriesProvider>
                        <PlansProvider>
                           <AuthorsProvider>
                              <CharacterProvider>
                                <ActorsProvider>
                                  <PackagesProvider>
                                    <FeaturesProvider>
                                      <MoviesProvider>
                                        <EpisodesProvider>
                                          <TrailersProvider>
                                            <AuThenProvider>                                 
                                            <App />
                                            </AuThenProvider>
                                          </TrailersProvider>
                                        </EpisodesProvider>
                                      </MoviesProvider>
                                    </FeaturesProvider>
                                  </PackagesProvider>
                                 </ActorsProvider>
                               </CharacterProvider>
                           </AuthorsProvider>
                        </PlansProvider>
                    </CategoriesProvider>
                    </FormUiProvider>
          </AcountProvider> 
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
