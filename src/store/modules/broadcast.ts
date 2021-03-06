import config from '@/config';
import i18n from '@/i18n';
import { bnum, denormalizeBalance, toWei, isTxReverted } from '@/helpers/utils';
import BigNumber from '@/helpers/bignumber';
import { makeGnosisTransaction } from '@/helpers/web3';
import { setGoal } from '@/helpers/fathom';

const mutations = {
  CREATE_POOL_REQUEST() {
    console.debug('CREATE_POOL_REQUEST');
  },
  CREATE_POOL_SUCCESS() {
    console.debug('CREATE_POOL_SUCCESS');
  },
  CREATE_POOL_FAILURE(_state, payload) {
    console.debug('CREATE_POOL_FAILURE', payload);
  },
  CREATE_SMART_POOL_REQUEST() {
    console.debug('CREATE_SMART_POOL_REQUEST');
  },
  CREATE_SMART_POOL_SUCCESS() {
    console.debug('CREATE_SMART_POOL_SUCCESS');
  },
  CREATE_SMART_POOL_FAILURE(_state, payload) {
    console.debug('CREATE_SMART_POOL_FAILURE', payload);
  },
  JOIN_POOL_REQUEST() {
    console.debug('JOIN_POOL_REQUEST');
  },
  JOIN_POOL_SUCCESS() {
    console.debug('JOIN_POOL_SUCCESS');
  },
  JOIN_POOL_FAILURE(_state, payload) {
    console.debug('JOIN_POOL_FAILURE', payload);
  },
  JOINSWAP_EXTERN_AMOUNT_REQUEST() {
    console.debug('JOINSWAP_EXTERN_AMOUNT_REQUEST');
  },
  JOINSWAP_EXTERN_AMOUNT_SUCCESS() {
    console.debug('JOINSWAP_EXTERN_AMOUNT_SUCCESS');
  },
  JOINSWAP_EXTERN_AMOUNT_FAILURE(_state, payload) {
    console.debug('JOINSWAP_EXTERN_AMOUNT_FAILURE', payload);
  },
  EXIT_POOL_REQUEST() {
    console.debug('EXIT_POOL_REQUEST');
  },
  EXIT_POOL_SUCCESS() {
    console.debug('EXIT_POOL_SUCCESS');
  },
  EXIT_POOL_FAILURE(_state, payload) {
    console.debug('EXIT_POOL_FAILURE', payload);
  },
  EXITSWAP_POOL_AMOUNT_IN_REQUEST() {
    console.debug('EXITSWAP_POOL_AMOUNT_IN_REQUEST');
  },
  EXITSWAP_POOL_AMOUNT_IN_SUCCESS() {
    console.debug('EXITSWAP_POOL_AMOUNT_IN_SUCCESS');
  },
  EXITSWAP_POOL_AMOUNT_IN_FAILURE(_state, payload) {
    console.debug('EXITSWAP_POOL_AMOUNT_IN_FAILURE', payload);
  },
  SET_PUBLIC_SWAP_REQUEST() {
    console.debug('SET_PUBLIC_SWAP_REQUEST');
  },
  SET_PUBLIC_SWAP_SUCCESS() {
    console.debug('SET_PUBLIC_SWAP_SUCCESS');
  },
  SET_PUBLIC_SWAP_FAILURE(_state, payload) {
    console.debug('SET_PUBLIC_SWAP_FAILURE', payload);
  },
  SET_SWAP_FEE_REQUEST() {
    console.debug('SET_SWAP_FEE_REQUEST');
  },
  SET_SWAP_FEE_SUCCESS() {
    console.debug('SET_SWAP_FEE_SUCCESS');
  },
  SET_SWAP_FEE_FAILURE(_state, payload) {
    console.debug('SET_SWAP_FEE_FAILURE', payload);
  },
  POKE_WEIGHTS_REQUEST() {
    console.debug('POKE_WEIGHTS_REQUEST');
  },
  POKE_WEIGHTS_SUCCESS() {
    console.debug('POKE_WEIGHTS_SUCCESS');
  },
  POKE_WEIGHTS_FAILURE(_state, payload) {
    console.debug('POKE_WEIGHTS_FAILURE', payload);
  },
  SET_CONTROLLER_REQUEST() {
    console.debug('SET_CONTROLLER_REQUEST');
  },
  SET_CONTROLLER_SUCCESS() {
    console.debug('SET_CONTROLLER_SUCCESS');
  },
  SET_CONTROLLER_FAILURE(_state, payload) {
    console.debug('SET_CONTROLLER_FAILURE', payload);
  },
  INCREASE_WEIGHT_REQUEST() {
    console.debug('INCREASE_WEIGHT_REQUEST');
  },
  INCREASE_WEIGHT_SUCCESS() {
    console.debug('INCREASE_WEIGHT_SUCCESS');
  },
  INCREASE_WEIGHT_FAILURE(_state, payload) {
    console.debug('INCREASE_WEIGHT_FAILURE', payload);
  },
  DECREASE_WEIGHT_REQUEST() {
    console.debug('DECREASE_WEIGHT_REQUEST');
  },
  DECREASE_WEIGHT_SUCCESS() {
    console.debug('DECREASE_WEIGHT_SUCCESS');
  },
  DECREASE_WEIGHT_FAILURE(_state, payload) {
    console.debug('DECREASE_WEIGHT_FAILURE', payload);
  },
  UPDATE_WEIGHTS_GRADUALLY_REQUEST() {
    console.debug('UPDATE_WEIGHTS_GRADUALLY_REQUEST');
  },
  UPDATE_WEIGHTS_GRADUALLY_SUCCESS() {
    console.debug('UPDATE_WEIGHTS_GRADUALLY_SUCCESS');
  },
  UPDATE_WEIGHTS_GRADUALLY_FAILURE(_state, payload) {
    console.debug('UPDATE_WEIGHTS_GRADUALLY_FAILURE', payload);
  },
  SET_CAP_REQUEST() {
    console.debug('SET_CAP_REQUEST');
  },
  SET_CAP_SUCCESS() {
    console.debug('SET_CAP_SUCCESS');
  },
  SET_CAP_FAILURE(_state, payload) {
    console.debug('SET_CAP_FAILURE', payload);
  },
  COMMIT_ADD_TOKEN_REQUEST() {
    console.debug('COMMIT_ADD_TOKEN_REQUEST');
  },
  COMMIT_ADD_TOKEN_SUCCESS() {
    console.debug('COMMIT_ADD_TOKEN_SUCCESS');
  },
  COMMIT_ADD_TOKEN_FAILURE(_state, payload) {
    console.debug('COMMIT_ADD_TOKEN_FAILURE', payload);
  },
  APPLY_ADD_TOKEN_REQUEST() {
    console.debug('APPLY_ADD_TOKEN_REQUEST');
  },
  APPLY_ADD_TOKEN_SUCCESS() {
    console.debug('APPLY_ADD_TOKEN_SUCCESS');
  },
  APPLY_ADD_TOKEN_FAILURE(_state, payload) {
    console.debug('APPLY_ADD_TOKEN_FAILURE', payload);
  },
  REMOVE_TOKEN_REQUEST() {
    console.debug('REMOVE_TOKEN_REQUEST');
  },
  REMOVE_TOKEN_SUCCESS() {
    console.debug('REMOVE_TOKEN_SUCCESS');
  },
  REMOVE_TOKEN_FAILURE(_state, payload) {
    console.debug('REMOVE_TOKEN_FAILURE', payload);
  },
  WHITELIST_LP_REQUEST() {
    console.debug('WHITELIST_LP_REQUEST');
  },
  WHITELIST_LP_SUCCESS() {
    console.debug('WHITELIST_LP_SUCCESS');
  },
  WHITELIST_LP_FAILURE(_state, payload) {
    console.debug('WHITELIST_LP_FAILURE', payload);
  },
  REMOVE_WHITELISTED_LP_REQUEST() {
    console.debug('REMOVE_WHITELISTED_LP_REQUEST');
  },
  REMOVE_WHITELISTED_LP_SUCCESS() {
    console.debug('REMOVE_WHITELISTED_LP_SUCCESS');
  },
  REMOVE_WHITELISTED_LP_FAILURE(_state, payload) {
    console.debug('REMOVE_WHITELISTED_LP_FAILURE', payload);
  },
  APPROVE_REQUEST() {
    console.debug('APPROVE_REQUEST');
  },
  APPROVE_SUCCESS() {
    console.debug('APPROVE_SUCCESS');
  },
  APPROVE_FAILURE(_state, payload) {
    console.debug('APPROVE_FAILURE', payload);
  },
  WRAP_ETH_REQUEST() {
    console.debug('WRAP_ETH_REQUEST');
  },
  WRAP_ETH_SUCCESS() {
    console.debug('WRAP_ETH_SUCCESS');
  },
  WRAP_ETH_FAILURE(_state, payload) {
    console.debug('WRAP_ETH_FAILURE', payload);
  },
  UNWRAP_ETH_REQUEST() {
    console.debug('UNWRAP_ETH_REQUEST');
  },
  UNWRAP_ETH_SUCCESS() {
    console.debug('UNWRAP_ETH_SUCCESS');
  },
  UNWRAP_ETH_FAILURE(_state, payload) {
    console.debug('UNWRAP_ETH_FAILURE', payload);
  }
};

const actions = {
  createPool: async (
    { commit, dispatch, rootState },
    { tokens, balances, weights, swapFee }
  ) => {
    commit('CREATE_POOL_REQUEST');
    try {
      balances = tokens.map(token => {
        const amountInput = balances[token];
        const amount = bnum(amountInput);
        const tokenMetadata = rootState.web3.tokenMetadata[token];
        const decimals = tokenMetadata ? tokenMetadata.decimals : null;
        return denormalizeBalance(amount, decimals)
          .integerValue(BigNumber.ROUND_DOWN)
          .toString();
      });
      swapFee = toWei(swapFee)
        .div(100)
        .toString();

      // Approve deployer contract to take seed tokens for pool
      const approvalTransactions = tokens.map((token, index) =>
        makeGnosisTransaction('TestToken', token, 'approve', [
          config.addresses.poolDeployer,
          balances[index]
        ])
      );
      // Deployer contract will create pool then transfer ownership to Gnosis Safe
      const createPoolTransaction = makeGnosisTransaction(
        'BalancerPoolDeployer',
        config.addresses.poolDeployer,
        'create',
        [config.addresses.bFactory, tokens, balances, weights, swapFee, true]
      );
      await dispatch('processTransactions', {
        title: 'Create a pool',
        transactions: [...approvalTransactions, createPoolTransaction]
      });
      setGoal('MGYMGNXQ');
      dispatch('notify', ['green', "You've successfully created a pool"]);
      commit('CREATE_POOL_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('CREATE_POOL_FAILURE', e);
    }
  },
  createSmartPool: async (
    { commit, dispatch, rootState },
    { poolParams, crpParams, rights }
  ) => {
    commit('CREATE_SMART_POOL_REQUEST');
    const {
      poolTokenSymbol,
      poolTokenName,
      constituentTokens,
      tokenWeights
    } = poolParams;
    let { tokenBalances, swapFee } = poolParams;
    let { initialSupply } = crpParams;
    const {
      minimumWeightChangeBlockPeriod,
      addTokenTimeLockInBlocks
    } = crpParams;
    try {
      tokenBalances = constituentTokens.map(token => {
        const amountInput = tokenBalances[token];
        const amount = bnum(amountInput);
        const tokenMetadata = rootState.web3.tokenMetadata[token];
        const decimals = tokenMetadata ? tokenMetadata.decimals : null;
        return denormalizeBalance(amount, decimals)
          .integerValue(BigNumber.ROUND_DOWN)
          .toString();
      });
      swapFee = toWei(swapFee)
        .div(100)
        .toString();
      poolParams = {
        poolTokenSymbol,
        poolTokenName,
        constituentTokens,
        tokenBalances,
        tokenWeights,
        swapFee
      };
      initialSupply = toWei(initialSupply).toString();
      crpParams = {
        initialSupply,
        minimumWeightChangeBlockPeriod,
        addTokenTimeLockInBlocks
      };

      console.log(
        'Create smart pool',
        JSON.stringify([
          config.addresses.crpFactory,
          config.addresses.bFactory,
          poolParams,
          crpParams,
          rights
        ])
      );
      // Approve deployer contract to take seed tokens for pool
      const approvalTransactions = constituentTokens.map((token, index) =>
        makeGnosisTransaction('TestToken', token, 'approve', [
          config.addresses.poolDeployer,
          tokenBalances[index]
        ])
      );
      // Deployer contract will create pool then transfer ownership to Gnosis Safe
      const createPoolTransaction = makeGnosisTransaction(
        'BalancerPoolDeployer',
        config.addresses.poolDeployer,
        'createSmartPool',
        [
          config.addresses.crpFactory,
          config.addresses.bFactory,
          poolParams,
          crpParams,
          rights
        ]
      );
      await dispatch('processTransactions', {
        title: 'Create a smart pool',
        transactions: [...approvalTransactions, createPoolTransaction]
      });
      setGoal('H854WJCE');
      dispatch('notify', ['green', i18n.tc('successCreatePool')]);
      commit('CREATE_SMART_POOL_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return Promise.reject(e);
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('CREATE_SMART_POOL_FAILURE', e);
    }
  },
  joinPool: async (
    { commit, dispatch },
    { poolAddress, poolAmountOut, maxAmountsIn, tokensList, isCrp = false }
  ) => {
    commit('JOIN_POOL_REQUEST');
    try {
      // Approve BActions contract to take tokens for depositing
      const approvalTransactions = tokensList.map((token, index) =>
        makeGnosisTransaction('TestToken', token, 'approve', [
          config.addresses.bActions,
          maxAmountsIn[index]
        ])
      );
      const joinTransaction = makeGnosisTransaction(
        'BActions',
        config.addresses.bActions,
        isCrp ? 'joinSmartPool' : 'joinPool',
        [poolAddress, poolAmountOut, maxAmountsIn]
      );
      await dispatch('processTransactions', {
        title: 'Add liquidity',
        transactions: [...approvalTransactions, joinTransaction]
      });
      await Promise.all([
        dispatch('getBalances'),
        dispatch('getUserPoolShares')
      ]);
      setGoal('OJGWYYDX');
      dispatch('notify', ['green', "You've successfully added liquidity"]);
      commit('JOIN_POOL_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('JOIN_POOL_FAILURE', e);
    }
  },
  joinswapExternAmountIn: async (
    { commit, dispatch },
    { poolAddress, tokenInAddress, tokenAmountIn, minPoolAmountOut }
  ) => {
    commit('JOINSWAP_EXTERN_AMOUNT_REQUEST');
    try {
      // Approve BActions contract to take token to be swapped into others to deposit
      const approvalTransaction = makeGnosisTransaction(
        'TestToken',
        tokenInAddress,
        'approve',
        [config.addresses.bActions, tokenAmountIn]
      );
      const addLiquidityTransaction = makeGnosisTransaction(
        'BActions',
        config.addresses.bActions,
        'joinswapExternAmountIn',
        [poolAddress, tokenInAddress, tokenAmountIn, minPoolAmountOut]
      );
      await dispatch('processTransactions', {
        title: 'Add liquidity',
        transactions: [approvalTransaction, addLiquidityTransaction]
      });
      await Promise.all([
        dispatch('getBalances'),
        dispatch('getUserPoolShares')
      ]);
      setGoal('VW5X6ROK');
      dispatch('notify', ['green', "You've successfully added liquidity"]);
      commit('JOINSWAP_EXTERN_AMOUNT_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('JOINSWAP_EXTERN_AMOUNT_FAILURE', e);
    }
  },
  exitPool: async (
    { commit, dispatch },
    { poolAddress, poolAmountIn, minAmountsOut }
  ) => {
    commit('EXIT_POOL_REQUEST');
    try {
      // No approval necessary as pool can always take Safe's BPT
      const transaction = makeGnosisTransaction(
        'BPool',
        poolAddress,
        'exitPool',
        [toWei(poolAmountIn).toString(), minAmountsOut]
      );
      await dispatch('processTransactions', {
        title: 'Remove liquidity',
        transactions: [transaction]
      });
      await Promise.all([
        dispatch('getBalances'),
        dispatch('getUserPoolShares')
      ]);
      setGoal('WL0NJSJZ');
      dispatch('notify', ['green', "You've successfully removed liquidity"]);
      commit('EXIT_POOL_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('EXIT_POOL_FAILURE', e);
    }
  },
  exitswapPoolAmountIn: async (
    { commit, dispatch },
    { poolAddress, tokenOutAddress, poolAmountIn, minTokenAmountOut }
  ) => {
    commit('EXITSWAP_POOL_AMOUNT_IN_REQUEST');
    try {
      // No approval necessary as pool can always take Safe's BPT
      const transaction = makeGnosisTransaction(
        'BPool',
        poolAddress,
        'exitswapPoolAmountIn',
        [tokenOutAddress, toWei(poolAmountIn).toString(), minTokenAmountOut]
      );
      await dispatch('processTransactions', {
        title: 'Remove liquidity',
        transactions: [transaction]
      });
      await Promise.all([
        dispatch('getBalances'),
        dispatch('getUserPoolShares')
      ]);
      setGoal('IFE3QZMO');
      dispatch('notify', ['green', "You've successfully removed liquidity"]);
      commit('EXITSWAP_POOL_AMOUNT_IN_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('EXITSWAP_POOL_AMOUNT_IN_FAILURE', e);
    }
  },
  setPublicSwap: async ({ commit, dispatch }, { poolAddress, publicSwap }) => {
    commit('SET_PUBLIC_SWAP_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'setPublicSwap',
        [publicSwap]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('SET_PUBLIC_SWAP_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('SET_PUBLIC_SWAP_FAILURE', e);
    }
  },
  setSwapFee: async ({ commit, dispatch }, { poolAddress, newFee }) => {
    commit('SET_SWAP_FEE_REQUEST');
    try {
      newFee = toWei(newFee)
        .div(100)
        .toString();
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'setSwapFee',
        [newFee]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      dispatch('notify', ['green', "You've successfully changed the swap fee"]);
      commit('SET_SWAP_FEE_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('SET_SWAP_FEE_FAILURE', e);
    }
  },
  pokeWeights: async ({ commit, dispatch }, { poolAddress }) => {
    commit('POKE_WEIGHTS_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'pokeWeights',
        []
      );
      await dispatch('processTransactions', {
        title: 'Poke weights',
        transactions: [transaction]
      });

      dispatch('notify', ['green', i18n.tc('successPokeWeights')]);
      commit('POKE_WEIGHTS_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('POKE_WEIGHTS_FAILURE', e);
    }
  },
  setController: async (
    { commit, dispatch },
    { poolAddress, newController }
  ) => {
    commit('SET_CONTROLLER_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'setController',
        [newController]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('SET_CONTROLLER_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('SET_CONTROLLER_FAILURE', e);
    }
  },
  increaseWeight: async (
    { commit, dispatch, rootState },
    { poolAddress, token, newWeight, tokenAmountIn }
  ) => {
    commit('INCREASE_WEIGHT_REQUEST');
    try {
      newWeight = toWei(newWeight)
        .div(2)
        .toString();
      const tokenMetadata = rootState.web3.tokenMetadata[token];
      const decimals = tokenMetadata ? tokenMetadata.decimals : null;
      tokenAmountIn = denormalizeBalance(tokenAmountIn, decimals)
        .integerValue(BigNumber.ROUND_DOWN)
        .toString();
      const approvalTransaction = makeGnosisTransaction(
        'TestToken',
        token,
        'approve',
        [poolAddress, tokenAmountIn]
      );
      const increaseWeightTransaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'updateWeight',
        [token, newWeight]
      );
      await dispatch('processTransactions', {
        transactions: [approvalTransaction, increaseWeightTransaction]
      });
      commit('INCREASE_WEIGHT_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('INCREASE_WEIGHT_FAILURE', e);
    }
  },
  decreaseWeight: async (
    { commit, dispatch },
    { poolAddress, token, newWeight /*poolAmountIn*/ }
  ) => {
    commit('DECREASE_WEIGHT_REQUEST');
    try {
      newWeight = toWei(newWeight)
        .div(2)
        .toString();
      // Pool can always take pool tokens from Safe so no approval needed
      const decreaseWeightTransaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'updateWeight',
        [token, newWeight]
      );
      await dispatch('processTransactions', {
        transactions: [decreaseWeightTransaction]
      });
      commit('DECREASE_WEIGHT_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('DECREASE_WEIGHT_FAILURE', e);
    }
  },
  updateWeightsGradually: async (
    { commit, dispatch },
    { poolAddress, tokens, newWeights, startBlock, endBlock }
  ) => {
    commit('UPDATE_WEIGHTS_GRADUALLY_REQUEST');
    try {
      newWeights = tokens.map(token => {
        return toWei(newWeights[token])
          .div(2)
          .toString();
      });
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'updateWeightsGradually',
        [newWeights, startBlock, endBlock]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('UPDATE_WEIGHTS_GRADUALLY_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('UPDATE_WEIGHTS_GRADUALLY_FAILURE', e);
    }
  },
  setCap: async ({ commit, dispatch }, { poolAddress, newCap }) => {
    commit('SET_CAP_REQUEST');
    try {
      newCap = toWei(newCap).toString();
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'setCap',
        [newCap]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('SET_CAP_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('SET_CAP_FAILURE', e);
    }
  },
  commitAddToken: async (
    { commit, dispatch, rootState },
    { poolAddress, token, balance, denormalizedWeight }
  ) => {
    commit('COMMIT_ADD_TOKEN_REQUEST');
    try {
      const tokenMetadata = rootState.web3.tokenMetadata[token];
      const decimals = tokenMetadata ? tokenMetadata.decimals : null;
      balance = denormalizeBalance(balance, decimals)
        .integerValue(BigNumber.ROUND_DOWN)
        .toString();
      denormalizedWeight = toWei(denormalizedWeight)
        .div(2)
        .toString();
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'commitAddToken',
        [token, balance, denormalizedWeight]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('COMMIT_ADD_TOKEN_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('COMMIT_ADD_TOKEN_FAILURE', e);
    }
  },
  applyAddToken: async (
    { commit, dispatch },
    { poolAddress, token, tokenAmountIn }
  ) => {
    commit('APPLY_ADD_TOKEN_REQUEST');
    try {
      // Token is taken on applying addition of token so we approve now
      const approvalTransaction = makeGnosisTransaction(
        'TestToken',
        token,
        'approve',
        [poolAddress, tokenAmountIn]
      );
      const applyAddTokenTransaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'applyAddToken',
        []
      );
      await dispatch('processTransactions', {
        transactions: [approvalTransaction, applyAddTokenTransaction]
      });
      commit('APPLY_ADD_TOKEN_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('APPLY_ADD_TOKEN_FAILURE', e);
    }
  },
  removeToken: async (
    { commit, dispatch },
    { poolAddress, token, poolAmountIn }
  ) => {
    commit('REMOVE_TOKEN_REQUEST');
    console.log(`poolAddress = ${poolAddress}`);
    console.log(`token = ${token}`);
    console.log(`poolAmountIn = ${poolAmountIn}`);

    try {
      // No approval necessary as pool can always take Safe's BPT
      const removeTokenTransaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'removeToken',
        [token, poolAmountIn.toString()]
      );
      await dispatch('processTransactions', {
        transactions: [removeTokenTransaction]
      });
      commit('REMOVE_TOKEN_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('REMOVE_TOKEN_FAILURE', e);
    }
  },
  whitelistLiquidityProvider: async (
    { commit, dispatch },
    { poolAddress, provider }
  ) => {
    commit('WHITELIST_LP_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'whitelistLiquidityProvider',
        [provider]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('WHITELIST_LP_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('WHITELIST_LP_FAILURE', e);
    }
  },
  removeWhitelistedLiquidityProvider: async (
    { commit, dispatch },
    { poolAddress, provider }
  ) => {
    commit('REMOVE_WHITELISTED_LP_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'ConfigurableRightsPool',
        poolAddress,
        'removeWhitelistedLiquidityProvider',
        [provider]
      );
      await dispatch('processTransactions', {
        transactions: [transaction]
      });
      commit('REMOVE_WHITELISTED_LP_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('REMOVE_WHITELISTED_LP_FAILURE', e);
    }
  },
  wrap: async ({ commit, dispatch }, amount) => {
    commit('WRAP_ETH_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'Weth',
        config.addresses.weth,
        'deposit',
        [],
        toWei(amount).toString()
      );
      await dispatch('processTransactions', {
        title: 'Wrap ETH to WETH',
        transactions: [transaction]
      });
      await dispatch('getBalances');
      setGoal('KFAFBADQ');
      dispatch('notify', [
        'green',
        `You've successfully wrapped ${amount} ether`
      ]);
      commit('WRAP_ETH_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('WRAP_ETH_FAILURE', e);
    }
  },
  unwrap: async ({ commit, dispatch }, amount) => {
    commit('UNWRAP_ETH_REQUEST');
    try {
      const transaction = makeGnosisTransaction(
        'Weth',
        config.addresses.weth,
        'withdraw',
        [toWei(amount).toString()]
      );
      await dispatch('processTransactions', {
        title: 'Unwrap WETH to ETH',
        transactions: [transaction]
      });
      await dispatch('getBalances');
      setGoal('XSBEFNTT');
      dispatch('notify', [
        'green',
        `You've successfully unwrapped ${amount} ether`
      ]);
      commit('UNWRAP_ETH_SUCCESS');
    } catch (e) {
      if (!e || isTxReverted(e)) return e;
      dispatch('notify', ['red', i18n.tc('failureOops')]);
      commit('UNWRAP_ETH_FAILURE', e);
    }
  }
};

export default {
  mutations,
  actions
};
