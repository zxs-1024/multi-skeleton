const router = {
  mode: 'history',
  routes: [
    {
      path: '/',
      skeletonId: 'SkeletonArticleDetail',
    },
    {
      path: '/about',
      skeletonId: 'SkeletonArticleDetail2',
    },
  ],
};

module.exports = router;