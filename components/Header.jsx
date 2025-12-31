// components/cart.jsx

import "./Header.css";

import { CONTACT } from "@/seo.config";

export default function cart() {

  const URLS = CONTACT.url;

  return (
    <>

    
      <section className="container p-0" id="review-ads">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-0">
          {["1", "2", "3", "4", "5"].map((n) => (
            <div className="col" key={n}>
              <a
                href={`${URLS}`}
                className="text-decoration-none"
              >
                <div className="card text-bg-dark no-border rounded-0">
                  <img
                    src={`${URLS}/${n}.gif`}
                    className="img-full"
                    alt={`${n}`}
                  />

                  
                  <div className="card-img-overlay p-1">
                   
                  </div>
                </div>
              </a>
            </div>

            
          ))}
        </div>
      </section>


    </>
  )
}
