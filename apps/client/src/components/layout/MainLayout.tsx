import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
