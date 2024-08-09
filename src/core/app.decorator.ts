import { SetMetadata } from '@nestjs/common';

import { AppAuthorizerOptions } from './app.type';

export const APP_AUTHORIZER_OPTIONS_KEY = 'APP_AUTHORIZER_OPTIONS_KEY';

export const SetAppAuthorizerOptions = (options: AppAuthorizerOptions = {}) =>
  SetMetadata(APP_AUTHORIZER_OPTIONS_KEY, {
    disabledRelationAuthorizer: options?.disabledRelationAuthorizer ?? false,
  });
