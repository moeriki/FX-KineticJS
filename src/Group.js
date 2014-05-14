(function() {
    Kinetic.Util.addMethods(Kinetic.Group, {
        ___init: function(config) {
            this.nodeType = 'Group';
            // call super constructor
            Kinetic.Container.call(this, config);
        },
        _validateAdd: function(child) {
            var type = child.getType();
            if (type !== 'Group' && type !== 'Shape') {
                Kinetic.Util.error('You may only add groups and shapes to groups.');
            }
        },
        /**
         * Overrides the default local bounding box calculation with
         * one the incorporates all its children that are visible
         */
        calculateLocalBoundingBox: function () {
            // Start with no bounds
            var res = { left: +Infinity, top: +Infinity, right: -Infinity, bottom: -Infinity };

            // Iterate over all children
            var validChildBounds = this.children.filter(function (child) {
                // Drop invisible children
                return child.getVisible();
            }).map(function (child) {
                // Get the child's bounding box (may recurse back into this function if the child is a group)
                return child.calculateBoundingBox();
            }).filter(function (childBounds) {
                // Drop children that have no bounds
                return childBounds != null;
            });
            validChildBounds.forEach(function (childBounds) {
                // Push the bounds of the bounding-box-up-till-now
                res.left   = Math.min(res.left, childBounds.left);
                res.top    = Math.min(res.top, childBounds.top);
                res.right  = Math.max(res.right, childBounds.right);
                res.bottom = Math.max(res.bottom, childBounds.bottom);
            });

            return validChildBounds.length > 0 ? res : null;
        }
    });
    Kinetic.Util.extend(Kinetic.Group, Kinetic.Container);

    Kinetic.Collection.mapMethods(Kinetic.Group);
})();
