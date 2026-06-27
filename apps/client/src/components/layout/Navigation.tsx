import { NavLink } from 'react-router-dom';
import {
  Code2,
  Layout,
  Eclipse,
  Braces,
  Database,
  FileSliders,
  CircleEllipsis,
  Settings,
} from 'lucide-react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <Code2 className="icon-accent icon-lg" />
          <span className={styles.navText}>Snippet Vault</span>
        </div>

        <div className={styles.navLinks}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <Layout className="icon-sm" />
            <span className={styles.navText}>Home</span>
          </NavLink>

          <NavLink
            to="/snippets/css"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <Eclipse className="icon-sm" />
            <span className={styles.navText}>CSS</span>
          </NavLink>

          <NavLink
            to="/snippets/js"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <Braces className="icon-sm" />
            <span className={styles.navText}>JS/TS</span>
          </NavLink>

          <NavLink
            to="/databases"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <Database className="icon-sm" />
            <span className={styles.navText}>Databases</span>
          </NavLink>

          <NavLink
            to="/config"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <FileSliders className="icon-sm" />
            <span className={styles.navText}>Config</span>
          </NavLink>

          <NavLink
            to="/others"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <CircleEllipsis className="icon-sm" />
            <span className={styles.navText}>Others</span>
          </NavLink>

          <button className={`${styles.navItem} ${styles.settingsBtn}`}>
            <Settings className="icon-md" />
            <span className={styles.navText}>Settings</span>
          </button>
        </div>
      </nav>
    </>
  );
};
