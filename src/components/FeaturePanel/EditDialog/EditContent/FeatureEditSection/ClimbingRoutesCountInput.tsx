import React from 'react';
import { TextField } from '@mui/material';
import { useCurrentItem } from '../../context/EditContext';
import { useMultiEdit } from '../../context/useMultiEdit';
import { t } from '../../../../../services/intl';
import { isClimbingRoute } from '../../../../../utils';

const KEY = 'climbing:routes';

export const ClimbingRoutesCountInput = () => {
  const { tags } = useCurrentItem();
  const { tags: shared, mixed, setTag } = useMultiEdit();

  if (isClimbingRoute(tags)) return null;

  const isMixed = Object.prototype.hasOwnProperty.call(mixed, KEY);
  const value = isMixed ? '' : (shared[KEY] ?? '');

  return (
    <TextField
      label={t('climbing_routes.label')}
      type="number"
      value={value}
      onChange={(e) => setTag(KEY, e.target.value)}
      placeholder={isMixed ? t('editdialog.multiple_values') : undefined}
      slotProps={{
        htmlInput: { min: 0, step: 1, inputMode: 'numeric' },
        inputLabel: { shrink: true },
      }}
      size="small"
      fullWidth
      sx={{ mt: 2 }}
    />
  );
};
