// import React, { createContext, useState } from 'react';
// import { CategoriesProvider } from '../context/CategoriesProvider';
// import { PlansProvider } from '../context/PlansProvider';
// import { AuthorsProvider } from '../context/AuthorsProvider';
// import { CharacterProvider } from '../context/CharacterProvider';
// import { ActorsProvider } from '../context/ActorsProvider';
// import { FormUiProvider } from './FormUiContext';
// import { AcountProvider } from './AcountProvider';
// import { PackagesProvider } from './PackagesProvider';
// import { FeaturesProvider } from './FeatureProvider';
// import { MoviesProvider } from './MovieProvider';
// import { EpisodesProvider } from './EpisodeProvider';
// import { TrailersProvider } from './TrailersProvider';
// import { AuThenProvider } from './AuthenProvider';

// const GlobalContext = createContext();

// const GlobalContextProvider = ({ children }) => {
//   const [visited, setVisited] = useState(false);
//   return (
//     <GlobalContext.Provider value={visited}>
//       <FormUiProvider>
//         <CategoriesProvider>
//             <PlansProvider>
//                <AuthorsProvider>
//                   <CharacterProvider>
//                     <ActorsProvider>
//                       <PackagesProvider>
//                         <FeaturesProvider>
//                           <MoviesProvider>
//                             <EpisodesProvider>
//                               <TrailersProvider>
//                                 <AuThenProvider>                                 
//                                   {children}
//                                 </AuThenProvider>
//                               </TrailersProvider>
//                             </EpisodesProvider>
//                           </MoviesProvider>
//                         </FeaturesProvider>
//                       </PackagesProvider>
//                      </ActorsProvider>
//                    </CharacterProvider>
//                </AuthorsProvider>
//             </PlansProvider>
//         </CategoriesProvider>
//         </FormUiProvider>
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalContextProvider;