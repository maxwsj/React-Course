import Accordion from './components/Accordion/Accordion';
import AccordionContent from './components/Accordion/AccordionContent';
import AccordionTitle from './components/Accordion/AccordionTitle';
import SearchableList from './components/SearchableList/SearchableList';
import Place from './Place';
import { PLACES } from './util/Places';

function App() {
   return (
      <main>
         <section>
            <h2>Why work with us?</h2>

            <Accordion className="accordion">
               <Accordion.Item id="experience" className="accordion-item">
                  <AccordionTitle className="accordion-item-tittle">
                     We got 20 years of experience
                  </AccordionTitle>
                  <AccordionContent className="accordion-item-content">
                     <article>
                        <p>You can&apos;t go wrong with us.</p>
                        <p>
                           We are in the business of planning highly
                           individualized vacation trips for more than 20 years.
                        </p>
                     </article>
                  </AccordionContent>
               </Accordion.Item>
               <Accordion.Item id="local-guides" className="accordion-item">
                  <AccordionTitle className="accordion-item-tittle">
                     We&apos;re working with local guides
                  </AccordionTitle>
                  <AccordionContent className="accordion-item-content">
                     <article>
                        <p>We are not doing this along from our office.</p>
                        <p>
                           Instead, we are working with local guides to ensure a
                           safe and pleasant vacation.
                        </p>
                     </article>
                  </AccordionContent>
               </Accordion.Item>
            </Accordion>
         </section>
         <section>
            <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
               {(item) => <Place item={item} />}
            </SearchableList>
            <SearchableList
               items={['item 1', 'item 2']}
               itemKeyFn={(item) => item}
            >
               {(item) => item}
            </SearchableList>
         </section>
      </main>
   );
}

export default App;
