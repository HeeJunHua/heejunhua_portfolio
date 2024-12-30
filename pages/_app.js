import App from 'next/app';
import React from 'react';
import { PageTransition } from 'next-page-transitions';
import BackgroundMusic from '../components/Audio/backgroundMusic';
import AppContext from '../components/Utils/context';
import {
  loadState,
  clearState,
  saveState,
} from '../components/Utils/localstorage';
import Loader from '../components/Loader/loader'; // Import the Loader

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      show: false,
      theme: loadState() ? true : false,
      isLoading: true, // Add a loading state
    };
  }

  loadTheme = () => {
    const { theme } = this.state;
    if (theme == false) {
      clearState();
    } else {
      saveState(1);
    }
  };

  handleopen = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  setTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: !theme });
  };

  closeShow = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    // Simulate the loading process by setting a timeout
    setTimeout(() => {
      this.setState({ isLoading: false }); // Stop the loader
    }, 3000); // 3 seconds for the loader
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { isLoading } = this.state; // Get the loading state

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <PageTransition
            timeout={200}
            classNames="page-transition"
            loadingDelay={100}
          >
            <AppContext.Provider
              key={Math.floor(Math.random() * Math.floor(20))}
              value={{
                show: this.state.show,
                theme: this.state.theme,
                loadTheme: this.loadTheme,
                setTheme: this.setTheme,
                handleopen: this.handleopen,
                closeShow: this.closeShow,
              }}
            >
              <Component {...pageProps} />
            </AppContext.Provider>
          </PageTransition>
        )}
        {/* Play background music after loader finishes */}
        {!isLoading && <BackgroundMusic />}
      </>
    );
  }
}
