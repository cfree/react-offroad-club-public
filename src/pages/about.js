import React from 'react';
import { Link } from 'gatsby';

import styles from '../assets/styles/pages/aboutPage.module.scss';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/Seo';
import Main from '../components/layout/Main';
import memberImgOld from '../../content/assets/early-club.jpg';
import memberImgRecent from '../../content/assets/recent-club.jpg';

const AboutPage = () => (
  <Layout showSmallHeader={true} pageTitle="About Us">
    <SEO title="Page two" />

    <Main>
      <h2>Meet the 4-Players of Colorado</h2>
      <img src={memberImgRecent} alt="2018 4-Players" />

      <h3>What Are We About?</h3>
      <h4>Exploring Trails</h4>
      <p>
        Each spring, we select trails throughout Colorado to explore. We choose
        various levels of trail difficulty and elevations based on anticipated
        snow melt. Our activity list is published around April of each year. An
        experienced member is designated as Run Leader for each outing to ensure
        safety and proper navigation. We meet at a central spot near the
        trailhead area since members come from many different directions. Each
        trail presents different views, obstacles, and challenges to overcome in
        our rigs, but we always adhere to the principles of{' '}
        <a
          href="http://www.staythetrail.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stay The Trail
        </a>{' '}
        and safe off-roading. For day runs, we typically stop for photography
        and breath-taking lunch spots. Runs often conclude at a local shop,
        cafe, or ice cream pallor. When we camp, we typically explore several
        trails in the area.
      </p>
      <h4>Fundraising</h4>
      <p>
        <img
          className={styles.oldImg}
          src={memberImgOld}
          alt="Late 80's 4-Players"
        />
        The club was founded in 1986 as a social organization for gay men in a
        time when non-bar activities were sought after during the uptick of the
        AIDS crisis. Since then, we've opened our doors to all LGBTQI+ community
        members. Fundraising for LGBTQI+ health organizations has always been
        central to the member’s activities since day one. We continue this
        tradition by hosting several beer busts at Trade bar each year. Each
        holiday season, members nominate and select local charities to receive
        monies from our fundraising efforts. Recently, we’ve donated to several
        charities including Denver Colorado AIDS Project, Howard Dental, Horizon
        House, CORSAR, and several area food banks. We expect our members to
        actively participate in fundraising and charitable efforts.
      </p>
      <h4>Camping</h4>
      <p>
        It's a great feeling to share a campfire with other guys after a day on
        the trail. A fellowship that shares your enjoyment in the outdoors and
        4x4ing is something to be experienced within our unique sub-culture of
        the LGBTQ community. Our campouts are selected each year to fall over
        one of the major holiday weekends, with more added during the peak
        high-elevation outdoor season. We typically visit Moab Utah near the end
        of September for their Pride and a full weekend of fun. Campouts are
        sometimes scheduled to join with a local gay RV group; many members of
        the 4-Players belong to that group as well. Campouts with us typically
        are tent-based and each person comes self-sufficient. We follow ‘Leave
        No Trace’ rules.
      </p>

      <hr />

      <p>
        If you have any questions, please feel free to{' '}
        <Link to="/contact">contact us</Link> for more information.
      </p>
    </Main>
  </Layout>
);

export default AboutPage;
