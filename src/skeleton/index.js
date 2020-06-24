
import Vue from 'vue';
import SkeletonArticleDetail from './components/SkeletonArticleDetail';
import SkeletonArticleDetail2 from './components/SkeletonArticleDetail2';

export default new Vue({
  components: {
    SkeletonArticleDetail,
    SkeletonArticleDetail2,
  },
  render() {
    return (
      <div>
        <SkeletonArticleDetail id="SkeletonArticleDetail" style="display:none" />
        <SkeletonArticleDetail2 id="SkeletonArticleDetail2" style="display:none" />
      </div>
    )
  }
});