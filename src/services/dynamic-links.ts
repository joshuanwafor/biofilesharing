import dynamicLinks from '@react-native-firebase/dynamic-links';

export async function buildLink(groupID: string) {
  const link = await dynamicLinks().buildLink({
    link: 'https://labonevclass.page.link/g?id=' + groupID,
    domainUriPrefix: 'https://labonevclass.page.link',
    analytics: {
      campaign: 'banner',
    },
    social: {
      title: 'Group Title Goes Here',
      descriptionText: 'Description goes here',
    },
  });

  return link;
}
