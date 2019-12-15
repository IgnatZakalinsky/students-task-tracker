export const flexRowStyle = {
    display: 'flex',
};
export const flexRowCenter = {
    ...flexRowStyle,
    alignItems: 'center',
};
export const flexRowCenterCenter = {
    ...flexRowCenter,
    justifyContent: 'center',
};
export const flexRowCenterSpaceAround = {
    ...flexRowCenter,
    justifyContent: 'space-around',
};
export const flexRowCenterCenter80 = {
    ...flexRowCenterCenter,
    height: '80vh',
};

export const flexColumnStyle = {
    ...flexRowStyle,
    flexFlow: 'column',
};
export const flexColumnCenter = {
    ...flexColumnStyle,
    alignItems: 'center',
};
export const flexColumnCenterCenter = {
    ...flexColumnCenter,
    justifyContent: 'center',
};
export const flexColumnCenterSpaceAround = {
    ...flexColumnCenter,
    justifyContent: 'space-around',
};
export const flexColumnCenterCenter80 = {
    ...flexColumnCenterCenter,
    height: '80vh',
};
