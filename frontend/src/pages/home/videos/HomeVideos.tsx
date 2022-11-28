import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Box, Button, Divider, Stack, Typography } from '@mui/material';

import UsageStatsSection from 'src/features/statistics/UsageStatsSection';
import { useCurrentPoll, useLoginState, useNotifications } from 'src/hooks';
import AlternatingBackgroundColorSectionList from 'src/pages/home/AlternatingBackgroundColorSectionList';
import TitleSection from 'src/pages/home/TitleSection';
import PollListSection from 'src/pages/home/PollListSection';
import ComparisonSection from 'src/pages/home/videos/sections/ComparisonSection';
import RecommendationsSection from 'src/pages/home/videos/sections/recommendations/RecommendationsSection';
import ResearchSection from 'src/pages/home/videos/sections/research/ResearchSection';
import { DEFAULT_POLL_STATS, getPollStats } from 'src/utils/api/stats';
import { PollStats } from 'src/utils/types';
import TempStudyBanner from '../banners/TempStudyBanner';

const HomeVideosPage = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useLoginState();
  const { showWarningAlert } = useNotifications();
  const { baseUrl, active, name: pollName } = useCurrentPoll();

  const [stats, setStats] = useState<PollStats>(DEFAULT_POLL_STATS);

  /**
   * Retrieve the Tournesol's statistics at the root of the home page to
   * provide them to each section needing them.
   */
  useEffect(() => {
    async function getPollStatsAsync(pollName: string) {
      try {
        const pollStats = await getPollStats(pollName);
        if (pollStats) {
          setStats(pollStats);
        }
      } catch (reason) {
        showWarningAlert(t('home.theStatsCouldNotBeDisplayed'));
      }
    }

    getPollStatsAsync(pollName);
  }, [pollName, showWarningAlert, t]);

  return (
    <>
      {/* Temporary banner, hardcoded here as long as we don't have an API control them. */}
      <TempStudyBanner />
      <AlternatingBackgroundColorSectionList lastItemIsPrimary>
        <TitleSection title={t('home.collaborativeContentRecommendations')}>
          <Typography paragraph fontSize="1.1em">
            {t('home.tournesolIsAParticipatoryResearchProject')}
          </Typography>

          <Typography paragraph fontSize="1.1em">
            {t('home.helpUsAdvanceResearch')}
          </Typography>

          {active ? (
            <Stack spacing={2} direction="row">
              {!isLoggedIn && (
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={Link}
                  to={`/signup`}
                  sx={{
                    px: 4,
                    textAlign: 'center',
                    fontSize: '120%',
                  }}
                >
                  {t('home.generic.createAccount')}
                </Button>
              )}
              <Button
                size="large"
                color="primary"
                variant="contained"
                component={Link}
                to={`${baseUrl}/comparison?series=true`}
                sx={{
                  px: 4,
                  fontSize: '120%',
                }}
              >
                {t('home.generic.start')}
              </Button>
            </Stack>
          ) : (
            <Box width="100%">
              <Divider sx={{ my: 1 }} />
              <Typography paragraph>
                {t('home.generic.pollIsClosed')}
              </Typography>
              <Stack spacing={2} direction="row">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  component={Link}
                  to={`${baseUrl}/recommendations`}
                  sx={{
                    px: 4,
                    fontSize: '120%',
                  }}
                >
                  {t('home.generic.seeResults')}
                </Button>
              </Stack>
            </Box>
          )}
        </TitleSection>
        <ComparisonSection
          comparisonStats={{
            comparisonCount: stats.comparisonCount,
            lastMonthComparisonCount: stats.lastMonthComparisonCount,
          }}
        />
        <RecommendationsSection
          comparedEntityStats={{
            comparedEntityCount: stats.comparedEntityCount,
            lastMonthComparedEntityCount: stats.lastMonthComparedEntityCount,
          }}
        />
        <ResearchSection />
        <UsageStatsSection externalData={stats} />
        <PollListSection />
      </AlternatingBackgroundColorSectionList>
    </>
  );
};

export default HomeVideosPage;
