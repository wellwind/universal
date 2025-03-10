import { GithubConfig } from '@angular/dev-infra-private/ng-dev/utils/config';

/**
 * Github configuration for the ng-dev command. This repository is
 * uses as remote for the merge script.
 */
export const github: GithubConfig = {
  owner: 'angular',
  name: 'universal',
  mainBranchName: 'master',
};
