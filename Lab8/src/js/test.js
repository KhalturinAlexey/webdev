const logStub = sinon.stub(console, 'log');
const errorStub = sinon.stub(console, 'error');
const warnStub = sinon.stub(console, 'warn');

describe('catVasiliy', () => {

    it('is correct name', function() { 
        expect(catVasiliy.name).to.eql("Василий");
    });

    it('is correct birthday', function() { 
        expect(catVasiliy.birthday.getDate()).to.eql(new Date().getDate());
    });

    it('should say meow', function() {
        catVasiliy.meow();     
        sinon.assert.calledWith(logStub, 'Meow!');
    });

    it('reacting with fear on vacuum cleaner', function() { 
        catVasiliy.reaction('vacuum cleaner');
        sinon.assert.calledWith(logStub, 'run from here!!!!');
        sinon.assert.calledWith(logStub, 'Meow!');
    });

    it('reacting with fear on beep', function() {
        catVasiliy.reaction('beep');
        sinon.assert.calledWith(logStub, 'run from here!!!!');
        sinon.assert.calledWith(logStub, 'Meow!');
    });

    it('reacting with joy correctly', function() {
        
        catVasiliy.reaction('ksksks');
        
        sinon.assert.calledWithExactly(logStub, 'Meow!');
    });
})

describe('cashbox', () => {

    it('is correct default amount', function() { 
        expect(cashbox.amount).to.eql(0);
    });

    it('is correct payment with error number', function() {
        cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' })
        sinon.assert.calledWith(errorStub, 'Amount not affected');
    });

    it('is correct payment with error string', function() {
        cashbox.addPayment({ amount: 'qwerty', info: 'Оплата штрафа' })
        sinon.assert.calledWith(errorStub, 'Amount not affected');
    });

    it('is correct payment with empty payment', function() {
        cashbox.addPayment({ });
        sinon.assert.calledWith(errorStub, 'Amount not affected');
    });

    it('is correct payment with no arg', function() {
        cashbox.addPayment();
        sinon.assert.calledWith(errorStub, 'Amount not affected');
    });

    it('is correct success payment', function() { 
        cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' })
        expect(cashbox.amount).to.eql(10);
    });

    it('is correct refund with zero amount', function() { 
        cashbox.amount = 0;
        cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
        sinon.assert.calledWith(warnStub, 'cashbox amount not affected');
    });

    it('is correct success refund', function() { 
        cashbox.amount = 10;
        cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
        expect(cashbox.amount).to.eql(0);
    });

    it('is correct refund with error string', function() {
        cashbox.refundPayment({ amount: 'qwerty', info: 'Оплата штрафа' })
        sinon.assert.calledWith(warnStub, 'cashbox amount not affected');
    });

    it('is correct refund with empty payment', function() {
        cashbox.refundPayment({ });
        sinon.assert.calledWith(warnStub, 'cashbox amount not affected');
    });

    it('is correct refund with no arg', function() {
        cashbox.refundPayment();
        sinon.assert.calledWith(warnStub, 'cashbox amount not affected');
    });
})

describe('isTimeRangesIntersect', () => {

    it('time ranges intersect on left', function() { 
        assert(isTimeRangesIntersect(['18:30', '19:30'], ['17:00', '19:00']));
    });

    it('time ranges intersect on right', function() { 
        assert(isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']));
    });

    it('time not ranges intersect on second greater', function() { 
        assert(!isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']));
    });

    it('time not ranges intersect on first greater', function() { 
        assert(!isTimeRangesIntersect(['18:30', '19:30'], ['17:00', '18:00']));
    });
})

describe('pullout array', () => {

    it('is correct pullout normal array', function() {
        expect(pulloutArray([1, 2, 3])).to.eql([1, 2, 3]);
    });

    it('is correct pullout empty array', function() {
        expect(pulloutArray([])).to.eql([]);
    });

    it('is correct pullout 2 arrays', function() {
        expect(pulloutArray([1, [2, 3, 4], 5])).to.eql([1, 2, 3, 4, 5]);
    });

    it('is correct pullout 2 arrays with 1 element array', function() {
        expect(pulloutArray([1, [2, 3, 4], 5, [1]])).to.eql([1, 2, 3, 4, 5, 1]);
    });

    it('is correct pullout 2 arrays with null and nan', function() {
        expect(pulloutArray([1, [1], null, NaN, ['test']])).to.eql([1, 1]);
    });
})

describe('replace string', () => {

    it('is return false without arguments', function() {
        assert(!replaceString());
    });

    it('is return false with empty search', function() {
        assert(!replaceString('abc', '', 'x'));
    });

    it('is correct replace with correct arguments', function() {
        expect(replaceString('abc', 'b', 'x')).to.eql('axc');
    });

    it('is correct replace with empty replacement', function() {
        expect(replaceString('abc', 'b', '')).to.eql('ac');
    });
})

describe('replace string', () => {

    it('is return false without arguments', function() {
        assert(!replaceString());
    });

    it('is return false with empty search', function() {
        assert(!replaceString('abc', '', 'x'));
    });

    it('is correct replace with correct arguments', function() {
        expect(replaceString('abc', 'b', 'x')).to.eql('axc');
    });

    it('is correct replace with empty replacement', function() {
        expect(replaceString('abc', 'b', '')).to.eql('ac');
    });
})

describe('soldier var game', () => {

    it('is correct 1 soldier name', function() {
        expect(soldier1.name).to.eql('Soldier1');
    });

    it('is correct 2 soldier name', function() {
        expect(soldier2.name).to.eql('Soldier2');
    });

    it('is correct healths', function() {
        expect(soldier1.health).to.eql(100);
        expect(soldier2.health).to.eql(100);
    });

    it('is correct coordinates', function() {
        expect(soldier1.currentCoordinates.x).to.be.a('string');
        expect(soldier1.currentCoordinates.y).to.be.a('string');
        expect(soldier1.currentCoordinates.x.length).to.eql(1);
        expect(soldier1.currentCoordinates.y.length).to.eql(1);
    });

    it('is correct get coordinates', function() {
        expect(getCoordinates().x).to.be.a('string');
        expect(getCoordinates().y).to.be.a('string');
        expect(getCoordinates().x.length).to.eql(1);
        expect(getCoordinates().y.length).to.eql(1);
    });

    it('is correct get random value', function() {
        expect(getRandomValue()).to.be.a('string');
        expect(getRandomValue().length).to.eql(1);
    });

    it('is correct isCoordinatesEqual with normal values', function() {
        assert(isCoordinatesEqual({ x: 1, y: 1 }, { x: 1, y: 1 }))
    });

    it('is correct isCoordinatesEqual with different values', function() {
        assert(!isCoordinatesEqual({ x: 1, y: 2 }, { x: 2, y: 1 }))
    });
})

describe('player', () => {

    it('is correct song list', function() {
        expect(tracks.length).to.eql(4);
    });

    it('is correct default track', function() {
        expect(Player.track).to.eql('song1.mp3');
    });

    it('is correct default status', function() {
        expect(Player.status).to.eql('pause');
    });

    it('is correct default display', function() {
        sinon.assert.calledWith(logStub, );
        expect(Player.display()).to.eql('Track: song1.mp3 Status: pause');
    });

    it('is correct play', function() {
        Player.play();
        expect(Player.status).to.eql('play');
        expect(Player.display()).to.eql('Track: song1.mp3 Status: play');
    });

    it('is correct pause', function() {
        Player.pause();
        expect(Player.status).to.eql('pause');
        expect(Player.display()).to.eql('Track: song1.mp3 Status: pause');
    });

    it('is correct next', function() {
        Player.next();
        expect(Player.status).to.eql('pause');
        expect(Player.display()).to.eql('Track: song2.mp3 Status: pause');
    });

    it('is correct next with last', function() {
        Player.next();
        Player.next();
        Player.next();
        expect(Player.display()).to.eql('Track: song1.mp3 Status: pause');
    });

    it('is correct prev', function() {
        Player.next();
        Player.prev();
        expect(Player.display()).to.eql('Track: song1.mp3 Status: pause');
    });

    it('is correct prev with first', function() {
        Player.prev();
        expect(Player.display()).to.eql('Track: song4.mp3 Status: pause');
    });
})

