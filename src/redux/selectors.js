import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.items;
const selectFilter = state => state.filter;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toUpperCase().includes(filter.toUpperCase())
    );
  }
);

export {
  selectContacts,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
};
