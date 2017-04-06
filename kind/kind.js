import kind from '@enact/core/kind';
import React from 'react';

const renderEnyoComponent = (component) => {
	const {components, content, kind: componentKind, tag, ...rest} = component;

	const Kind = componentKind || tag;

	let children = null;
	if (components) {
		children = components.map(renderEnyoComponent);
	} else if (content) {
		children = content;
	}

	return (
		<Kind {...rest}>
			{children}
		</Kind>
	);
};

const enyoKind = (config) => {
	const render = kind(config);

	return (props) => {
		const component = render(props);
		return renderEnyoComponent(component);
	};
};

export default enyoKind;
export {
	enyoKind as kind
};
