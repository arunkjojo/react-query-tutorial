import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>

          <li>
            <Link to="/rq-parallel">RQ Parallel</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
          </li>

          <li>
            <Link to="/rq-dependent">RQ Dependent</Link>
          </li>

          <li>
            <Link to="/rq-paginated">RQ Paginated</Link>
          </li>

          <li>
            <Link to="/rq-infinite">RQ Infinite</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        
        <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
        <Route
          path="/rq-dynamic-parallel"
          element={<DynamicParallelPage heroIds={[1, 3]} />}
        />

        <Route
          path="/rq-dependent"
          element={<DependentQueriesPage email="arunkjojo@example.com" />}
        />

        <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
        
        <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />
      
      </Routes>
    </div>
  );
}

export default App;
