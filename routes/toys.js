var express = require('express');
var router = express.Router();

/* Sample toy data */
const toys = [
    { name: 'Teddy Bear', type: 'Stuffed Animal', age_range: '3-6 years' },
    { name: 'Lego Set', type: 'Building Blocks', age_range: '5-12 years' },
    { name: 'Action Figure', type: 'Figurine', age_range: '4-10 years' },
    { name: 'Iron man', type: 'Action', age_range: '10-15 years' }
];

// Update the route to just '/' for the toys
router.get('/', (req, res) => {
    res.render('toys', { title: 'SearchResults', toys: toys });
});

module.exports = router;
